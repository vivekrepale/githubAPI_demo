import React from "react";

const Footer = ({ url, buttonText, unique, sendRequest, setDisplayCard }) => {
	return (
		<footer className="footer" key={unique}>
			<button
				onClick={() => {
					sendRequest(url);
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				{buttonText}
			</button>
		</footer>
	);
};

export default Footer;
