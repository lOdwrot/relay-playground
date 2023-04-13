import graphql from "babel-plugin-relay/macro";

// Define a query
export const RepositoryNameQuery = graphql`
  query RepoInfoAppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;
