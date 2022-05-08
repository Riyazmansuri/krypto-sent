/*import React from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);*/

import { createRoot } from 'react-dom/client';
import React from "react";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
);