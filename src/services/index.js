import axios from "axios";
import { API_ENDPOINT, httpConstants } from "../constants";

export const loginUser = async (data) => {
  let url = "https://cosmation-microservice.onrender.com/login";
  try {
    let response = await axios(url, {
      method: httpConstants.METHOD_TYPE.POST,
      data: data,
      headers: { "Content-type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
    console.log(error);
  }
};

export const registerUser = async (data) => {
  let url = process.env.REACT_APP_SERVICE + API_ENDPOINT.REGISTER;
  try {
    let response = await axios(url, {
      method: httpConstants.METHOD_TYPE.POST,
      data: data,
      headers: { "Content-type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
    console.log(error);
  }
};

export const upload = async ({ file, name }) => {
  let url = process.env.REACT_APP_SERVICE + API_ENDPOINT.UPLOAD;
  let formData = new FormData();
  formData.append("audio", file, name);
  try {
    let response = await fetch(url, {
      method: httpConstants.METHOD_TYPE.POST,
      body: formData,
      headers: {
        username:
          String(localStorage.getItem("user")).slice(0, 1).toLowerCase() +
          String(localStorage.getItem("user")).slice(1).toLowerCase(),
        token: localStorage.getItem("token"),
      },
      mode: "cors",
      redirect: "follow",
    })
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        return err;
      });
    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
    console.log(error);
  }
};
