import "./header.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { onAuthStateChanged,auth,signOut } from '../../../config/Firebase.jsx';

export default function Header() { 
   const [currentUser, setCurrentUser] = useState(null)
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const location = useLocation();
  const [buttonVisible, setButtonVisible] = useState(true);
  
  useEffect(() => {
    if(location.pathname === "/addpost") {
      setButtonVisible(false);
    }else if (location.pathname === "/signup") {
      setButtonVisible(false);
    } else if (location.pathname === "/signin") {
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }
  }, [location.pathname]);
  

   return(
    <>
      <nav className="navbar d-flex align-items-center justify-content-betweennavbar bg-body-secondary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="top-cnt bg-body-secondary">
            <img
              src={"src/component/reusable/Header/blackolx.png"}
              width="30px"
              alt="not found"
              className="mx-3"
            />
            <small>
              {" "}
              <i className="fa fa-car m-1"></i> MOTORS
              <i className="fa fa-building m-1"></i> PROPERTY
            </small>
          </div>
          <h2>
            <Link to="/">
              {" "}
              <a className="my-1">Home</a>
            </Link>
          </h2>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        {currentUser ? (
        <div>
          <h5 className="m-3 d-inline-block">Welcome,, {currentUser.email}!</h5>
 <img className="profile-image"  alt="Profile" />
          
          <button className="bg-danger text-white btn m-1" onClick={() => auth.signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <h5 className="m-3 d-inline-block">You are not signed in.</h5>
  <Link to="/signin"><button className="login-btn btn btn-primary mx-2 mb-0">Sign in</button></Link>
        </div>
      )}    
            <div className="d-flex">
              <Link to="/signup">
                <button className="m-1 btn text-white bg-primary">
                  Create New Account
                </button>
              </Link>
          
              <Button className="m-1 bg-primary btn " variant="primary" onClick={handleShow}>
        Profile Settings
      </Button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-body-secondary sticky-top">
        <div className="header-nav bg-body-tertiary">
          <div>
            <img
              width="50px"
              src="src/component/reusable/Header/blueolx.png"
              alt="olx.png"
            />
          </div>
          <div>
            <select className="first-input">
              <option selected="Pakistan">Pakistan</option>
              <option>Sindh</option>
              <option>Karachi Sindh</option>
              <option>Punjab</option>
              <option>Balochistan</option>
            </select>
          </div>
          <div className="second-input-icon">
            <input
              className="second-input"
              type="text"
              placeholder="Search In Pakistan"
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <h4 className="m-2 mx-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                {" "}
                <span id="count"> 0 </span>{" "}
                <i className="fa fa-shopping-cart"></i>
              </span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Your Cart{" "}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div
                  id="cart"
                  className="cart-data row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-4 "
                ></div>
              </div>
            </div>
          </h4>
     {currentUser ? (
    buttonVisible && (
        <Link to="/addpost">
            <button
                id="sell-bt"
                type="button"
                className="btn sell-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                SELL
            </button>
        </Link>
    )
) : (
    <Link to="/signin">
            <button
                id="sell-bt"
                type="button"
                className="btn sell-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
              Login
            </button>
        </Link>
)}
        </div>
      </nav>
      <div className="btn-group bg-body-tertiary">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle m-2"
          data-toggle="dropdown"
          aria-haspopup="false"
          aria-expanded="false"
        >
          More
        </button>
        <a href="#" className="third-nav-a text-decoration-none">
          Phones
        </a>
        <a href="#" className="third-nav-a text-decoration-none">
          Tablets
        </a>
        <a href="#" className="third-nav-a text-decoration-none">
          Furniture
        </a>
        <a href="#" className="third-nav-a text-decoration-none">
          Cars
        </a>
        <div className="dropdown-menu">
          <h5>Accessories</h5>
          <a className="dropdown-item" href="#">
            Charger's
          </a>
          <a className="dropdown-item" href="#">
            AirPods
          </a>
          <a className="dropdown-item" href="#">
            Pouches
          </a>
          <h5>Mart</h5>
          <a className="dropdown-item" href="#">
            Something
          </a>
          <a className="dropdown-item" href="#">
            Hello world
          </a>
          <a className="dropdown-item" href="#">
            Help Us
          </a>
        </div>
      </div>
       

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="user-card">  
          <h2>User Profile</h2>
      <input type="file" accept="image/*" />
      {error && <p>{error}</p>}
      {imageUrl && <img alt="Profile" />}
    
        </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
