import React, { useState, useEffect } from 'react';
import validation from "./validation";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () => {
    let navigate = useNavigate();
    // Storing Form Field Values
    const [formValues, setFormValues] = useState({ name: "", email: "", password: "", place: "" });

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false);

    // Manage Field Change
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
           addUsers();
        }
    }, [formErrorValues]);

   // var [myvalue, setmyValue] = MyForm({ username: "", email: "", password: "" })
    const addUsers = () => {
        console.log(formValues)
        axios.post("http://localhost:3005/api/signup", formValues).then(
            (res) => {
                alert("Success")
                navigate("../signin", { replace: true })
                console.log("in axios post" + res.data)

            }
        )
    }

  
  
    return (
        <>
            

            <form className='register' onSubmit={handleSubmit}>
                <h3>Registration</h3>

                <label>Name</label>
                <input onChange={handleChange} type="text" placeholder="Name" id="name" name="name" value={formValues.name} />
                <span className='error'>{formErrorValues.name}</span>
                <label>Email</label>
                <input onChange={handleChange} type="email" placeholder="Email" id="email" name="email" value={formValues.email} />
                <span className='error'>{formErrorValues.email}</span>
                <label for="password">Password</label>
                <input onChange={handleChange} type="password" placeholder="Password" id="password" name="password" value={formValues.password} />
                <span className='error'>{formErrorValues.password}</span>
                <label for="place">Place</label>
                <input onChange={handleChange} type="place" placeholder="Place" id="place" name="place" value={formValues.place} />
                <span className='error'>{formErrorValues.place}</span>
                <button>Submit</button>
            
        </form>
    </>
    );
};

export default Register;