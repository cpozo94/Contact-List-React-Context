import React,  { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";






export const EditUser = () => {
  const { store, actions } = useContext(Context);
 const [formData, setFormData] = useState(store.contact);
 const navigate = useNavigate();
	
 console.log(store)

 //seteo my nuevo formData con la info que el usuario mete en el input.
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
           });
  };   
  

  //formData.id proque es como viene definido en la API que tengo que acceder al usuario.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${formData.id}`, {
         method: "PUT",
         body: JSON.stringify(formData),
        headers: {
           "Content-Type": "application/json"
         }
       });
       const data = await response.json();
       console.log(data);
     } catch (err) {
       console.log(err);
     }
     navigate("/")
   };
  

 
  return (
    <div className="container">
      <div>
        <h1>Edit Contact</h1>
        <form onChange={handleInputChange}>
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="full_name"
              placeholder="Full name"
              defaultValue={formData.full_name}
              
              
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              defaultValue={formData.email}
             
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone"
              defaultValue={formData.phone}
             
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter address"
              defaultValue={formData.email}
              
              
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>

        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
};

//se puede hacer que cuando le de a save, vuelva al a página principal? lo he probado y no me da resultado cuando he añadido Link

export default EditUser;
