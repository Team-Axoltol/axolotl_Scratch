import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import App2 from "./Components/App2.jsx";
// ReactDOM.render(<App />), document.getElementById("root");

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  <App />
  //   </Provider>
  // </React.StrictMode>
);