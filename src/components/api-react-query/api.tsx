import axios from "axios";
import Repository  from "../Types";
import URL from "../URL";

async function getUsers(): Promise<Repository[]> {
  const response = await axios.get<Repository[]>(`${URL}`);

  return response.data;
}

export const api = {
  getUsers,
};