import React from "react";

const Footer = ({ url, buttonText, unique, sendRequest, setDisplayCard }) => {
	return (
		<footer className="footer" key={unique}>
			<h4
				className="card-wrapper__follow__button card-wrapper__follow__button--white"
				onClick={() => {
					sendRequest(url);
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				{buttonText.slice(5).slice(1, -1)}
			</h4>
		</footer>
	);
};

export default Footer;
