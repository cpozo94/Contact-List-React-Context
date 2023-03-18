import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen,faEnvelope, faTrash, faMobilePhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import getData from "./prueba.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.fetchContacts();
	}, []);

	return (
		<div className="container">
			<div className="add">
				<Link to="/todo">
					<a className="btn btn-success" id="contact">
						Add new contact
					</a>
				</Link>
			</div>
		
			<ul className="list-group">
  				{store.contacts.map((item, index) => {
	    			return (
						<li key={index} className="list-group-item">
							<div className="left-container">
							  <div className="imagen">
								<img src={`https://randomuser.me/api/portraits/men/${index+1}.jpg`} alt="Profile" />
							  </div>
							  <div className="details">
								<h5>{item.full_name}</h5>
								<p><FontAwesomeIcon icon={faEnvelope}/> Email: {item.email}</p>
								<p><FontAwesomeIcon icon={faMobilePhone}/> Phone: {item.phone}</p>
								<p><FontAwesomeIcon icon={faLocationDot}/> Address: {item.address}</p>
							  </div>
							</div>
							<div className="right-container">
							  <div className="icons">
								<div className="pen">
								<FontAwesomeIcon icon={faPen}/>
								</div>
								<div>
								<FontAwesomeIcon icon={faTrash} onClick={() =>
  									store.contacts.splice(index, 1)
								} />
								</div>
							  </div>
							</div>
						</li>
	    			);
  				})}
			</ul>
		</div>
	);
};
