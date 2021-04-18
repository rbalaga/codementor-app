import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { store } from "./redux";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import "./styles.css";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </div>
  );
}
