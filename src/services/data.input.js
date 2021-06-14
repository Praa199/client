import axios from "axios";
// import * as CONSTS from "../utils/consts";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "error while sending form data***. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const dataService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/protected`,
});

export function sendData(data) {
  console.log("DATA**", data);
  return dataService
    .post("/form", data)
    .then(successStatus)
    .catch(internalServerError);
}

export function getData(id) {
  console.log(id);
  return dataService
    .get(`table/${id}`)
    .then(successStatus)
    .catch(internalServerError);
}

//called from DeleteInfo.jsx 6
export function removeSingleBudget(id) {
  console.log("delete Id:", id.singleMonthId);
  axios
    .delete(
      `${process.env.REACT_APP_SERVER_URL}/protected/delete/${id.singleMonthId}`
    )
    // .delete(`delete/${id}`)
    .then(successStatus)
    .catch(internalServerError);
}
