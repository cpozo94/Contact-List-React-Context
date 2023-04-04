import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";





const Todo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "practica",
    phone: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      
    });
  };


  //evito que se recargue la página y justo despues de "response.json" el campo debe volver a valores iniciales vacíos.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        full_name: "",
        email: "",
        agenda_slug: "practica",
        phone: "",
        address: "",
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

 
  return (
    <div className="container">
      <div>
        <h1>Add new contact</h1>
        <form onSubmit={handleSubmit}>
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
              value={formData.full_name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
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
              value={formData.address}
              onChange={handleInputChange}
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


export default Todo;
