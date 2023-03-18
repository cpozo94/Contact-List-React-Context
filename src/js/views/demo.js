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
								<div className="pen">
								<FontAwesomeIcon icon={faPen}/>
								</div>
								<div>
								
<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<FontAwesomeIcon icon={faTrash} 							 />
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        If you delete this thing the entire universe will go down!!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
        <button type="button" class="btn btn-secondary">Yes baby!</button>
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
