import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen,faEnvelope, faTrash, faMobilePhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import getData from "./prueba.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [state,setState] = useState(store)
	
	useEffect(() => {
		actions.fetchContacts();
	}, []);

	const deleteUSer = async (id) => {
		await actions.deleteContacts(id);
		const newContacts = store.contacts.filter(contact => contact.id !== id);
		setStore({ contacts: newContacts });
	};

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
							  <Link to="/edit">
								<div className="pen">
								
								<FontAwesomeIcon icon={faPen}/>
								
								</div>
								</Link>
								<div>
								
<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<FontAwesomeIcon icon={faTrash} 							 />
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="modal_title">Are you sure?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        If you delete this thing the entire universe will go down!!
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
        <button type="button" className="btn btn-secondary">Yes baby!</button>
      </div>
    </div>
  </div>
</div>
								
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
