import React, { useState, useEffect } from "react";
import Axios from "axios";

const Card = ({ username, id, avatar, unique, getUsersIFollow }) => {
	const [follow, setFollow] = useState(false);

	const followAUser = async (username) => {
		const url = `https://api.github.com/user/following/${username}`;
		const headers = {
			headers: {
				Authorization: "Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675",
			},
		};
		try {
			const res = await Axios.put(url, null, headers);
			console.log(res);
			if (res.status == 204) {
				checkIfIFollowAUser(username);
				getUsersIFollow();
				setInterval(() => {
					getUsersIFollow();
				}, 10000);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const checkIfIFollowAUser = async (username) => {
		const url = `https://api.github.com/user/following/${username}`;
		const headers = {
			headers: {
				Authorization: "Token 5ede6a5bde154d02ae6514db2e8eb2c399aed675",
			},
		};
		try {
			const res = await Axios.get(url, headers);
			setFollow(true);
		} catch (e) {
			//console.log(unique, username, false);
			setFollow(false);
		}
	};

	useEffect(() => {
		checkIfIFollowAUser(username);
	}, [username]);

	return (
		<div className="card-wrapper" key={unique}>
			<div className="card-wrapper__head">
				{" "}
				<img
					className="card-wrapper__avatar"
					src={avatar}
					alt="avatar"
				/>
				<h3 className="card-wrapper__username">{username}</h3>
			</div>
			<h4 className="card-wrapper__id">Fork id: {id}</h4>

			{follow ? (
				<h3>Following</h3>
			) : (
				<button
					className="card-wrapper__btn"
					onClick={(e) => {
						followAUser(username);
					}}
				>
					Follow
				</button>
			)}
		</div>
	);
};

export default Card;
