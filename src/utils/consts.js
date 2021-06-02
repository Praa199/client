export const ACCESS_TOKEN = "access_token";
const APP_NAME = "my-personal-budget";
export const CAPITALIZED_APP =
  APP_NAME[0].toUpperCase() + APP_NAME.slice(1).toLowerCase();

const URL = process.env.REACT_APP_SERVER_URL;

export const SERVER_URL = URL ? `${URL}/api` : `http://localhost:5005/api`;
// const theUrl = process.env.REACT_APP_SERVER_URL;
