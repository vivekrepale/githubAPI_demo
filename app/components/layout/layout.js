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

	const sendRequest = async (
		url = "https://api.github.com/repos/facebook/react/forks"
	) => {
		try {
			const res = await Axios.get(url);
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
				Authorization: "Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675",
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
			<button
				onClick={() => getUsersIFollow()}
				className="layout-wrapper__btn"
			>
				Get all users I follow
			</button>
			<div className="layout-wrapper__data layout-wrapper__data--following">
				{following.map((d, key) => {
					return (
						<Following
							username={d.login}
							id={d.id}
							avatar={d.avatar_url}
							unique={key}
						/>
					);
				})}
			</div>

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
	);
};

export default Layout;

// 411175e2714dccffd1ce3f9919662ef75afdea7e
//5ede6a5bde154d02ae6514db2e8eb2c399aed675
