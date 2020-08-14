import React from "react";
import Axios from "axios";

const Following = ({ username, id, avatar, unique, getUsersIFollow }) => {
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
			<h4 className="card-wrapper__id">Id: {id}</h4>
		</div>
	);
};

export default Following;
