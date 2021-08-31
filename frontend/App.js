import React from "react";
import Navigator from "./Navigation/Navigator";
import createStore from "./Redux/Store";
import { Provider } from "react-redux";
export const { store, persistor } = createStore()
import Amplify from "aws-amplify";

import awsExports from './aws-exports'
Amplify.configure(awsExports);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
