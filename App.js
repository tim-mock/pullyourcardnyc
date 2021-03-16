import React from "react";
import Navigator from "./Navigation/Navigator";
import store from "./Redux/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
