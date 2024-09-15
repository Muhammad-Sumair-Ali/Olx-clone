import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/reusable/Home';
import Layout from './component/reusable/Layout';
import Modal from './component/reusable/Modal/ModalComponent.jsx';
import SignUp from './Signup/SignUp.jsx';
import SignIn from "./Signin/SignIn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/details/:id" element={<Layout/>} />
  <Route path="/addpost" element={< Modal />} />
   <Route path="/signup" element={< SignUp />} />
 <Route path="/signin" element={< SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
