import React, { useState, useEffect } from "react";
import { TaskList } from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { cargarTasksAPI } from "../services/service";
import { agregarTask, borrarTask, cargarTasks } from "../slices/tasksSlice";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function TaskForm() {
  /* Require to run 
    npm install react-redux 
    npm install react react-dom react-scripts react-router-dom
    npm install react-bootstrap */
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [lastId, setLastId] = useState(300);
  const [userIds, setUserIds] = useState("");
  const [opcion, setOpcion] = useState("");
  const [completed, setCompleted] = useState(false);

  const cargarTasksSlice = async () => {
    const tasks = await cargarTasksAPI();
    dispatch(cargarTasks(tasks));
  };

  const tasks = useSelector((state) => state.tasksSlice?.tasks);
  const [userTasks, setUserTasks] = useState("");

  function getTasksByUserID(idUser) {
    const getTasksByUserID = tasks?.find((tasks) => tasks?.userId == idUser);
  }

  function getUserIds() {
    const getUserIds = tasks?.find((tasks) => tasks?.userId);
    setUserIds(getUserIds);
  }

  const handleChange = (e) => setTask({ [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (Object.keys(task).length === 0) {
      alert("el campo no puede estar vacio");
      return;
    } else {
      const registroAgregar = {
        userId: opcion,
        id: lastId,
        title: task,
        completed: false,
      };
      dispatch(agregarTask(registroAgregar));
      setLastId(lastId + 1);
      setTask("");
    }
    setUserTasks([...tasks, task]);
  };

  const deleteTask = (indice) => {
    const newTasks = [...tasks];
    newTasks.splice(indice, 1);
    setUserTasks(newTasks);
    if (tasks?.find((tasks) => tasks?.id == indice)) {
      dispatch(borrarTask(indice));
    }
  };

  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverClick = () => {
    setShowPopover(!showPopover);
    document.body.style.overflow = showPopover ? "hidden" : "auto";
  };
  const popover = (
    <Popover className={showPopover ? "popover-open" : ""}>
      <Popover.Header as="h3">
        <div id="popover-header">
          <p>Añadir tarea</p>
          <button onClick={(e) => document.querySelector("#btnOpPop").click()} id="btn-close-popover">
            X
          </button>
        </div>
      </Popover.Header>
      <Popover.Body>
        <form onSubmit={(e) => e.preventDefault()} id="popover-form">
          <label className="text-datos-label">Nombre</label>
          <br />
          <input
            type="text"
            name="taskTitle"
            placeholder="Nombre"
            onChange={(e) => setTask(e.target.value)}
            className="input-field-popover"
          />
          <br />
          <label className="text-datos-label">Completada</label>
          <input
            type="checkbox"
            name="taskCompleted"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <button onClick={handleClick} id="btn-guardar-task">
            Guardar
          </button>
        </form>
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    if (showPopover) {
      document.body.classList.add("popover-open");
    } else {
      document.body.classList.remove("popover-open");
    }
  }, [showPopover]);

  useEffect(() => {
    cargarTasksSlice();
    getUserIds();
    setUserTasks(getTasksByUserID(1));
  }, []);

  return (
    <div className="Container">
      <p className="Title margin-top">Mis Tareas</p>

      <div>
        <form>
          <label>Select User ID</label>
          <br />
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              onChange={(e) => setOpcion(e.target.value)}
            />
          </div>
        </form>
      </div>

      {tasks?.map((value, index) => [
        value.userId == opcion ? (
          <TaskList key={value.id} task={value} deleteTask={deleteTask} />
        ) : (
          [
            index < 3 && opcion == "" ? (
              <TaskList key={value.id} task={value} deleteTask={deleteTask} />
            ) : (
              ""
            ),
          ]
        ),
      ])}

      <div id="toPopover">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button id="btnOpPop" onClick={handlePopoverClick}>
            Añadir tarea
          </button>
        </OverlayTrigger>
      </div>
    </div>
  );
}
