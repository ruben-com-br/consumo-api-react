import { useEffect, useState } from "react";
import Repository from './Types';
import URL from './URL'

function ApiFetch() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      })
  }, []);

  return (
    <div>
      <h1>Consumo de api em Fetch</h1>
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

export default  ApiFetch;


