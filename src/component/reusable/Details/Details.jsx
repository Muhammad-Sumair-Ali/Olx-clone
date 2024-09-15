
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Details = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  return (
    <>
     <center><Link to="/"><button className="p-3 m-2 border-0">Back To Home</button></Link></center>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="card mb-5">
          <img src={product.category && product.category.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Price: ${product.price}</h5>
            <h5 className="card-title">{product.title}</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 2 weeks ago</small>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
