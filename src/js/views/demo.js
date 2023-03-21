import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen,faEnvelope, faTrash, faMobilePhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import getData from "./home.jsx";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "./home.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

//defino el usteState(store) que se encuentra en flux, dentro estarían los contacts: []
export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [state,setState] = useState(store);
	const navigate = useNavigate();
	
//cada vez que carga la página, llamo a actions.fetchContacts() que a su vez hace un fetch "GET" (home.jsx)
//para que haga una llamada a la API y ver los contactos que tengo.

	useEffect(() => {
		actions.fetchContacts();
	}, []);

//lo tengo pendiente de ver.


const deleteContact = (ids, index) => {
	const id = ids[index];
	deleteUser(id);
	actions.fetchContacts();
	console.log(id);
  };


//al hacer click en el lapiz, llamo al action del edit contact para llamar al usuario que acabo de crear.
//actions.editContact lo tengo en flux.js, 
const editContact = (contact) =>{
 actions.editContact(contact);
 navigate("/edit")


}

	//tengo establecido el map, unido al store contacts, en función de los contacts que tenga añadidos
	//generará X elementos, sotre estaría en flux.js
	//dentro de cada elemento lo hemos vinculado al item en questión y hemos obtenido 
	//lo que queremos, email,phone y adress en este caso.

	return (


		<div className="container">
			<div className="add">
				<Link to="/todo">
					<button className="btn btn-success" id="contact">
						Add new contact
					</button>
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
								<FontAwesomeIcon icon={faPen} onClick={()=> editContact(item)}/>
								</div>
								</Link>
								<div>
								
				<button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
				<FontAwesomeIcon icon={faTrash}/>
				</button>


						<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
								<button type="button" className="btn btn-secondary" onClick={() => console.log(item.id, index)}>Yes baby!</button>
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
