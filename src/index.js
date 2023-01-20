import { createRoot } from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
