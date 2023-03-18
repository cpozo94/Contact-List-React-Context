import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	console.log("store",store)

	return (
		<div className="container">
			<Link to="/todo">
			<a className="btn btn-success" id="contact">
				Add new contact
			</a>
			</Link>

		
		
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li key={index} className="list-group-item">
						<h5>{item.full_name}</h5>
						<p>Email: {item.email}</p>
						<p>Phone: {item.phone}</p>
						<p>Address: {item.address}</p>
					</li>
					);
				})}
			</ul>
			
		</div>
	);
};
