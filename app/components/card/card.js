import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Waypoint } from "react-waypoint";
import { useSpring, useTransition, a, config } from "react-spring";

const Card = ({ username, id, avatar, unique, getUsersIFollow }) => {
	const [follow, setFollow] = useState(false);
	const [displayCard, setDisplayCard] = useState(false);

	const animation = useSpring({
		opacity: displayCard ? 1 : 0,
		transform: displayCard ? "scale(1)" : "scale(0.5)",
		config: config.slow,
	});

	const animation2 = useTransition(displayCard, null, {
		// opacity: displayCard ? 1 : 0,
		// transform: displayCard ? "translate3d(0,0,0)" : "translate3d(0,50%,0)",
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.slow,
	});

	const followAUser = async (username) => {
		const url = `https://api.github.com/user/following/${username}`;
		const headers = {
			headers: {
				Authorization: "Token ccd37db2a86cf10eb945050a086b79b9371a0683",
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
				Authorization: "Token ccd37db2a86cf10eb945050a086b79b9371a0683",
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
		<a.div style={animation} className="card-wrapper" key={unique}>
			<Waypoint
				onEnter={() => setDisplayCard(true)}
				onLeave={() => setDisplayCard(false)}
				bottomOffset="10%"
			/>
			<div className="card-wrapper__head">
				{" "}
				<img
					className="card-wrapper__head__avatar"
					src={avatar}
					alt="avatar"
				/>
				<h4 className="card-wrapper__head__username">{username}</h4>
			</div>
			<h5 className="card-wrapper__id">Fork id: {id}</h5>
			<div className="card-wrapper__follow">
				{follow ? (
					<h4 className="card-wrapper__follow__text">Following</h4>
				) : (
					<h4
						className="card-wrapper__follow__button"
						onClick={(e) => {
							followAUser(username);
						}}
					>
						Follow
					</h4>
				)}
			</div>
		</a.div>
	);
};

export default Card;
