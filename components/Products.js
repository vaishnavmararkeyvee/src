import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const ProductList = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        productData();
    }, []);

    function productData() {
        axios.get("http://localhost:3005/api/view")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    
    return (
        <>

<h1>Product List</h1>

<table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Category</th>
  </tr>
  <tr>
    <td>Product1</td>
    <td>Price1</td>
    <td>Quantityt1</td>
    <td>Category1</td>
  </tr>
  <tr>
  <td>Product2</td>
    <td>Price2</td>
    <td>Quantityt2</td>
    <td>Category2</td>
  </tr>
</table>


        </>
    );
}
export default ProductList;