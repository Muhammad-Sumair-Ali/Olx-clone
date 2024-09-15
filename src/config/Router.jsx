
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Content = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
   <h3 class="mx-4 m-1 d-inline-block">All Ads in Pakistan </h3>
{loading && <img src="./loader.gif" alt="Loading..." />}
      {!loading && !products.length && <img src="./loader.gif" alt="No data" />}
    <div id="card-cnt" className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-4 m-xl-auto m-2 g-3">
          
            
      
      {!loading && products.map((product) => (
        <div key={product.id} className="col">
          <div className="card h-auto Main-Card-Cnt">
            <img src={product.category.image} className="cart-img card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Price: ${product.price}</h5>
              <h5 className="card-title">{product.title}</h5>
            </div>
            <div className="d-flex align-items-center">
             <Link to="/Details/:id" > <a className="Buy-Button btn w-75 btn-primary m-2">See More</a></Link>
              
              <i className="fa fa-heart" onClick={() => addtoCart(product)}></i>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 2 weeks ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
   </>
  );
}

export default Content;