const urlBase = "https://jsonplaceholder.typicode.com/todos/";

export const cargarTasksAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    return fetch(`${urlBase}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data de tasks >>>-----> ", data);
        return data;
      })
      .catch((error) => {
        console.log("error", error);
        throw new Error("Hubo un error al cargar los tasks");
      });
  };