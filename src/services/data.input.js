import axios from "axios";
import * as CONSTS from "../utils/consts";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  console.log("error while sending form data***", err.response.data);
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
const authService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/input`,
});

export function sendData(data) {
  return authService
    .post("/form", data)
    .then(successStatus)
    .catch(internalServerError);
}
