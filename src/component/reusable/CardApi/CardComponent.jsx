
import React, { useEffect, useState } from "react"; import axios from "axios";
import './cardApi.css'

const CardComponent = () => {
  

const [data, setData] = useState([]);

useEffect(() => {
axios
.get("https://fakestoreapi.com/products/")

.then((response) => setData(response.data))

.catch((error) => console.log(error));

}, []);

return (
  
<div className="Mobiles-Cnt">

{data.map((item) => (

<div className="Mobiles-Card" key={item.id}>

<img src={item.image} className="card-img-top"

alt="..." />

<div className="card-body">

<h4 className="card-title mt-2">Price: {item.price}

</h4>

<h4 className="card-title-mob">{item.category}</

h4>

</div>

<div className="card-footer d-flex

align-items-center">

<a className="Buy-Button btn w-75 btn-primary
mx-2">Buy Now</a>
  
  <i className="fa fa-heart"></i>
  
  </div>

  </div>




))}

 </div>

);

};

export default CardComponent;