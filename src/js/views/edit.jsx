import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";



//problema que tengo, cómo defino de manera dinámica el campo agenda_slug sin tener que poner un valor determinado para crear el usuario.
//defino uno, y todos los nuevos usuarios los tengo controlados.

export const EditUser = () => {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     agenda_slug: "practica",
//     phone: "",
//     address: "",
//   });

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
      
//     });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
//         method: "PUT",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//       setFormData({
//         full_name: data.full_name,
//         email: data.email,
//         agenda_slug: data.agenda_slug,
//         phone: data.phone,
//         address: data.address,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
  

 
  return (
    <div className="container">
      <div>
        <h1>Edit Contact</h1>
        <form >
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
              
              
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
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
