import React from "react";
import { Link } from "react-router-dom";
import "../../styles/todo.css";

const Todo = () => {
    console.log("hola")
    return (

        <div>
            <h1>Add new contact</h1>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Full name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full name"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Adress</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter adress"/>
        </div>
        <div className="mb-3">
        <button type="button" className="btn btn-primary">save</button>
        </div>


            <Link to="/">
            or get back to contact

            </Link>
        </div>
         
    )
   
}






export default Todo

