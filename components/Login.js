import React, { useState, useEffect } from 'react';
import "./Signin.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SignIn = (props) => {
    let navigate = useNavigate();
    let [login, SetLogin] = useState([]);
    const [formValues, setFormValues] = useState({ name: "", password: "" });


   
    const handleChange = (event) => {
         console.log(event.target);
        const { name, value } = event.target; 
        setFormValues({ ...formValues, [name]: value });
         console.log(formValues);
    }

    useEffect(() => {
        loginData();
    }, []);

    function loginData() {
        axios.get("http://localhost:3005/api/signin")
            .then((response) => {
                console.log("in logindata",response.data);
                SetLogin(login = response.data);
                
            }
            )
    }
    function authenticate() {
        console.log("in authenticate")
        let flag1=0
        let flag2=0
        let admin=0
    login.map((x, key) => (
        (x.name===formValues.name && x.password===formValues.password)?flag1=1:flag2=0
    ))
    
    if (admin===1)
    {navigate("../", { replace: true })
        props.setlogin(2)
       
    }
    else if (flag1===1)
    {
        navigate("../", { replace: true })
        alert("Success")
        props.setlogin(1)
        
    }
    
    else
    alert("Invalid Username or Password")
    }

    const clicked = (event) => {
        navigate("../signup", { replace: true })
    }
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="signin" onSubmit={clicked}>
                <h3>Sign In</h3>

                <label for="name">Name</label>
                <input type="text" name="name" placeholder="name" id="name" onChange={handleChange} value={formValues.name}/>

                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Password" id="password" onChange={handleChange} value={formValues.password} />

                        <button onClick={authenticate}>Sign In</button>
                        <label>Not Registered?</label>
                        <button onClick={clicked}>Register</button>
                        
                    </form>
                </>
                );
};

                export default SignIn;