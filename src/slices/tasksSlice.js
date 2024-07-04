
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: [],
    id: [],
    title: [],
    completed: []
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        cargarTasks: (state, action) => {
            state.tasks = action.payload;
        },
        borrarTask: (state, action) => {
            const idTaskBorrar = action.payload;
            const copiaTaskFiltrada = state.tasks.filter(
                task => task.id !== idTaskBorrar
            );
            state.tasks = copiaTaskFiltrada;
        },
        modificarTask: (state, action) => {
            let taskAModificar = action.payload;
            const taskEnListaDeTasks = state.tasks.find(
                task => task.id === taskAModificar.id
            );
            const targetTask = { ...taskEnListaDeTasks, ...taskAModificar };
            Object.assign(taskEnListaDeTasks, targetTask);
        },
        agregarTask: (state, action) => {
            const taskNueva = action.payload;
            state.tasks = [...state.tasks, taskNueva];
        }
    },
});

export const { cargarTasks, borrarTask, modificarTask, agregarTask } = tasksSlice.actions;
export default tasksSlice.reducer;