import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
	<div>This is my boilerplate to start a new project!</div>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept();
}
