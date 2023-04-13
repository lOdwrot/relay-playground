import { usePreloadedQuery } from "react-relay";
import { RepositoryNameQuery } from "./RepoInfo.query";

export const RepoInfo = ({preloadedQuery}) => {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository.name}</p>
      </header>
    </div>
  );
};
