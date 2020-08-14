import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Layout from "./components/layout/layout.js";

ReactDOM.render(<Layout />, document.getElementById("app"));

if (module.hot) {
	module.hot.accept();
}
