import React, { useState } from "react";
import Axios from "axios";

const Layout = () => {
	//state to store the data
	const [data, setData] = useState([]);
	const [pagination_links, set_pagination_links] = useState("");

	const sendRequest = async (
		url = "https://api.github.com/repos/facebook/react/forks??client_id=2282079b01f393e69c91&client_secret=63884ea5631399d0cae111fb8dbc4b0edafe7ab7"
	) => {
		try {
			const res = await Axios.get(url);
			setData(res.data);
			//console.log(res.headers.link);
			set_pagination_links(res.headers.link);
		} catch (e) {
			console.log(e);
		}
	};
	//console.log("A:", links);

	const urlArray = pagination_links.split(",");
	//console.log(urlArray);

	const getUsersIFollow = async () => {
		const url = `https://api.github.com/user/following?client_id=2282079b01f393e69c91&client_secret=63884ea5631399d0cae111fb8dbc4b0edafe7ab7`;
		const headers = {
			headers: {
				Authorization: "Token 411175e2714dccffd1ce3f9919662ef75afdea7e",
			},
		};
		try {
			const res = await Axios.get(url, headers);
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	const followAUser = async (username) => {
		const url = `https://api.github.com/user/following/${username}?client_id=2282079b01f393e69c91&client_secret=63884ea5631399d0cae111fb8dbc4b0edafe7ab7`;
		const headers = {
			headers: {
				Authorization: "Token 411175e2714dccffd1ce3f9919662ef75afdea7e",
			},
		};
		try {
			const res = await Axios.put(url, null, headers);
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="layout-wrapper">
			<button
				onClick={() => getUsersIFollow()}
				className="layout-wrapper__btn"
			>
				Get all users I follow
			</button>

			<button
				onClick={() => sendRequest()}
				className="layout-wrapper__btn"
			>
				Get all users who forked Reacts repository!
			</button>
			<div className="layout-wrapper__data">
				{data.map((d, key) => {
					//console.log(d.full_name);
					//const name = d.full_name.split("/")[0];
					const username = d.owner.login;
					return (
						<div key={key}>
							<img
								className="image"
								src={d.owner.avatar_url}
								alt="avatar"
							/>
							<h3>Username: {username}</h3>
							<h4>Fork id: {d.id}</h4>
							<button
								onClick={() => {
									followAUser(username);
								}}
							>
								Follow
							</button>
						</div>
					);
				})}

				{pagination_links
					? urlArray.map((u, key) => {
							const url = u.split(";")[0].trim().slice(1, -1);
							const buttonText = u.split(";")[1];
							// console.log("URL", url);
							// console.log("Button", buttonText);
							return (
								<button
									key={key}
									onClick={() => sendRequest(url)}
								>
									{buttonText}
								</button>
							);
					  })
					: ""}
			</div>
		</div>
	);
};

export default Layout;

// 411175e2714dccffd1ce3f9919662ef75afdea7e
