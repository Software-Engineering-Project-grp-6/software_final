import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import farmer_icon from '../Assets/farmer.jpg';
import './VendorInfo.css';

export const VendorInfo = () => {
    const navigate = useNavigate();

    // State for each input
    const [vInfo, setvInfo] = useState({
        vendorName: '',
        businessName: '',
        email: '',
        businessAddress: '',
        postalCode: '',
        phone: '',
        licenseNumber: '',
        item: '',
        price: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setvInfo({
            ...vInfo,
            [name]: value,
        });
    };

    // Function to handle the post
    const handlePost = () => {
        // Simple validation to check if all fields are filled
        if (Object.values(vInfo).some(value => value.trim() === '')) {
            alert('Please fill out all fields before posting.');
            return;
        }

        // Navigate to HomePage
        navigate('/home');
    };

    return (
        <div className="background">
             <div className="Post-container">
                     <h2>Post Your Listings</h2>
            
                     <div className="PostYourL-info1">
  <div className="row">
    <p><b>Vendor Name:</b></p>
    <input type="text" name="vendorName" value={vInfo.vendorName} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>Business Name:</b></p>
    <input type="text" name="businessName" value={vInfo.businessName} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>Business Address:</b></p>
    <input type="text" name="businessAddress" value={vInfo.businessAddress} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>Postal Code:</b></p>
    <input type="text" name="postalCode" value={vInfo.postalCode} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>Email Address:</b></p>
    <input type="text" name="email" value={vInfo.email} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>Phone No.:</b></p>
    <input type="text" name="phone" value={vInfo.phone} onChange={handleChange} />
  </div>
  <div className="row">
    <p><b>License Number:</b></p>
    <input type="text" name="licenseNumber" value={vInfo.licenseNumber} onChange={handleChange} />
  </div>
</div>
            <p>_______________________________________________________________________________________________________________________________________</p>
            <div className="farmer-items-container2">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="farmer-item2">
              <div className="farmer-image2"> <img src={farmer_icon} alt='farmer'/></div>
              <div className="farmer-description2">
              <label>Item:</label> <input type="text" name="item" value={vInfo.item} onChange={handleChange}/>
              <label>Price:</label> <input type= 'text' name="price" value={vInfo.price} onChange={handleChange}  />
              </div>
            </div>
          ))}
        </div>

            <button onClick={handlePost} className="post-button">Post</button>
        </div>
    </div>
    );
};
