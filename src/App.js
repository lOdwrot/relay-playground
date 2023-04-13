import { Suspense } from "react";
import {
  loadQuery, RelayEnvironmentProvider
} from "react-relay/hooks";
import "./App.css";
import { RelayEnv } from "./graphql/utils";
import { RepoInfo } from "./RepoInfo/RepoInfo";
import { RepositoryNameQuery } from "./RepoInfo/RepoInfo.query";



const preloadedQuery = loadQuery(RelayEnv, RepositoryNameQuery, {
  /* query variables */
});

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnv}>
      <Suspense fallback={'Loading...'}>
        <RepoInfo preloadedQuery={preloadedQuery}/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
