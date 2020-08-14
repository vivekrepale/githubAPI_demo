import React from "react";

const Footer = ({ url, buttonText, unique, sendRequest }) => {
	return (
		<footer className="footer" key={unique}>
			<button onClick={() => sendRequest(url)}>{buttonText}</button>
		</footer>
	);
};

export default Footer;
