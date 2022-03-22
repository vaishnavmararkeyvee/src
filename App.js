import './App.css';
import Register from './components/Registration';
import SignIn from './components/Login';
import ProductList from './components/Products';
import AddProducts from './components/Add';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React, { useState } from 'react';
function App() {
  var [loggedin, setloggedin] = useState(0)
  var [loggedout, setloggedout] = useState(0)
  console.log("lin",loggedin)
  console.log("lout",loggedout)
  const setlogin = (l) => {
    setloggedin(l)
  }
  const setlogout = (l) => {
    setloggedout(l)
    setloggedin(l)
  }
  if(loggedin===0)
   { return (
     
      <Router>
        
        <div className="App">
        
          <Routes>
        <Route path="/register" element={<Register />} ></Route>
            <Route path="/signin" element={<SignIn  setlogin={setlogin}/>} ></Route>
          </Routes>
          
        </div>
       
      </Router>
    );}
    else if(loggedin===1)
    {
    return (
      <Router>
          
          <div className="App">
          
            <Routes>
            
              <Route path="/add" element={<AddProducts />} ></Route>
            <Route path="/productlist/:id" element={<ProductList />} ></Route>
            
              
           </Routes>
            
          </div>
        </Router>
      );
   }
   
  
  } 
  


export default App;