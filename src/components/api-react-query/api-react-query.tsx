import { useQuery } from "react-query";
import { api } from "./api";

function ApiReactQuery() { 
  const { data, isError, isLoading } = useQuery("repo", api.getUsers);

  return (
    <div>
      {isLoading && <h3>Carregando...</h3>}
      {isError && <h3>Ocorreu algum problema :(</h3>}
      <h1>Consumo de api em React Query</h1>
      <h2>Lista de Repositorios</h2>
      {data?.map((repo) => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </div>
  );
}

export default ApiReactQuery;


/*
  # Tutorial de implementacao
  
  # instale 
  npm i react-query

  # crie a pasta services
  mkdir src/services
  touch src/services/queryClient.tsx

  # configure main.txs 
  # configure api
*/