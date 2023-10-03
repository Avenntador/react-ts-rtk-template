import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Временно
import { Root } from "@/pages";

import { Provider } from "react-redux";
import store from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>
);
