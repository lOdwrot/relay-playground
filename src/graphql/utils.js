import {Environment, Network, RecordSource, Store} from 'relay-runtime';

export async function fetchGraphQL(text, variables) {
  const token = process.env.REACT_APP_GRAPHQL_ADDRESS_TOKEN;
  const url = process.env.REACT_APP_GRAPHQL_ADDRESS;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
  }
  
  // Export a singleton instance of Relay Environment configured with our network function:
  export const RelayEnv = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
