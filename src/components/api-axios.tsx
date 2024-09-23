import { SetStateAction, useEffect, useState } from "react";
import Repository from './Types';
import URL from './URL'
import axios from "axios";

function ApiAxios() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    //fetch(URL)
    axios.get(URL)

      // .then((response) => response.json())
      // .then((data) => { 
      //   setRepositories(data);
      // })

      .then((response: { data: SetStateAction<Repository[]>; }) => {
        setRepositories(response.data);
      })
  }, []);

  return (
    <div>
      <h1>Consumo de api em Axios</h1>
      <h2>Lista de Repositorios</h2>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  ApiAxios;

