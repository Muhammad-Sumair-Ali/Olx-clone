import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
const ModalComponent = () => {

  const location = useLocation();
  const { pathname } = location;
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <h2 className="text-primary text-center m-2 mt-2">Add Post On OLX / Form</h2>
   <div className="m-5 mt-5 ">
     
      <div className="modal-body">
            <div className="mb-2">
              <label htmlFor="title" className="form-label">Product Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} />
              <label htmlFor="price" className="form-label">Product Price</label>
              <input type="text" className="form-control" id="price" value={price} onChange={handlePriceChange} />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-1">
              <label htmlFor="des" className="form-label">Description</label>
              <input type="text" className="form-control" placeholder="Description Here" id="des" value={description} onChange={handleDescriptionChange} />
            </div>
            <div className="mb-2">
              <h6>Product image</h6>
              <input className="form-control" type="file" id="selected-logo" onChange={handleFileChange} />
              <div className="m-2">
                {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" width="80" height="80px" />}
              </div>
            </div>
          </div>
          <div className="modal-footer m-2">
            <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary m-2">Save changes</button>
          </div>
     </div>
   </>
  );
};

export default ModalComponent;
