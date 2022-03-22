import React from 'react';
import "./Add.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MyForm from './Dbform';
const AddProducts = () => {
    let navigate = useNavigate();
    var [myvalue, setmyValue] = MyForm({ product: "", price: "", quantity: "", category: "", })
    const addProducts = () => {
        console.log(myvalue)
        axios.post("http://localhost:3005/api/add", myvalue).then(
            (res) => {
                alert("Successfully Added products")
                navigate("../productlist", { replace: true })
                console.log("in axios post" + res.data)

            }
        )
    }
    return (

        <div className="container">
            <div className="row">
                <h1>Add Products</h1>
            </div>
            
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required name="productname" value={myvalue.productname} onChange={setmyValue} />
                        <label>Name</label>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="number" required name="price" value={myvalue.title} onChange={setmyValue} />
                        <label>Price</label>
                    </div>
                </div>

                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required name="quantity" value={myvalue.quantity} onChange={setmyValue}></textarea>
                        <label> Quantity</label>
                    </div>
                    <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required name="category" value={myvalue.category} onChange={setmyValue}></textarea>
                        <label> Category</label>
                    </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="btn-lrg submit-btn" onClick={addProducts}>Add products</div>
                </div>
            </div>
        

    );
};

export default AddProducts;