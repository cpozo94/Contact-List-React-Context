import React from "react";
import { Link } from "react-router-dom";
import "../../styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";


const Todo = () => {
    console.log("hola")
    return (
        <div className="container">
          <div>
            <h1>Add new contact</h1>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">Phone</label>
              <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">Address</label>
              <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter address" />
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary w-100">Save</button>
            </div>
      
            <Link to="/">
              or get back to contacts
            </Link>
          </div>
        </div>
      );
      
   
}






export default Todo

