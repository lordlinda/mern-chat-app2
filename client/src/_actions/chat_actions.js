import axios from "axios";
import { GET_CHATS, AFTER_POST_MESSAGE } from "./types";
import { CHAT_SERVER } from "../components/Config.js";

export const getChats = () => async (dispatch) => {
  const request = await axios
    .get(`https://mernchatapp2.herokuapp.com${CHAT_SERVER}/getChats`)
    .then((response) => response.data);
  console.log(request);
  dispatch({
    type: GET_CHATS,
    payload: request,
  });
};

export function afterPostMessage(data) {
  return {
    type: AFTER_POST_MESSAGE,
    payload: data,
  };
}
