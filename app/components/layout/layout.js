import React, { useState, useEffect } from "react";
import Axios from "axios";

import Card from "../card/card.js";
import Footer from "../footer/footer.js";
import Header from "../header/header.js";
import Following from "../following/following.js";

const Layout = () => {
	//state to store the data

	const [data, setData] = useState([]);
	const [pagination_links, set_pagination_links] = useState("");
	const [following, setFollowing] = useState([]);

	const { TOKEN } = process.env;

	const sendRequest = async (
		url = "https://api.github.com/repos/facebook/react/forks"
	) => {
		const headers = {
			headers: {
				Authorization: `token ${TOKEN}`,
			},
		};
		try {
			const res = await Axios.get(url, headers);
			setData(res.data);
			//console.log(res.data);
			set_pagination_links(res.headers.link);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		sendRequest();
	}, []);

	const urlArray = pagination_links.split(",");

	const getUsersIFollow = async () => {
		const url = `https://api.github.com/user/following`;
		const headers = {
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
			},
		};
		try {
			const res = await Axios.get(url, headers);
			//console.log(res.data);
			setFollowing(res.data);
		} catch (e) {
			console.log(e);
		}
		return following.length;
	};

	return (
		<div className="layout-wrapper">
			<Header />
			<div className="layout-wrapper__data">
				<h3>Users who forked Reacts repo from github:</h3>
				{data.map((d, key) => {
					return (
						<Card
							username={d.owner.login}
							id={d.id}
							avatar={d.owner.avatar_url}
							unique={key}
							getUsersIFollow={getUsersIFollow}
						/>
					);
				})}
			</div>
			<div className="footer-wrapper">
				{pagination_links
					? urlArray.map((u, key) => {
							const url = u.split(";")[0].trim().slice(1, -1);
							const buttonText = u.split(";")[1];
							return (
								<Footer
									url={url}
									buttonText={buttonText}
									unique={key}
									sendRequest={sendRequest}
								/>
							);
					  })
					: ""}
			</div>
		</div>
	);
};

export default Layout;
