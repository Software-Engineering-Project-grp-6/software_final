import React, { useState } from 'react';
import './HomePage.css'; // Ensure this path is correct
import {useLocation, useNavigate } from 'react-router-dom'; // Importing useNavigate
import farmer_icon from '../Assets/farmer.jpg';
export const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();   
  const navigate = useNavigate(); // Initialize useNavigate
  const {FarmerName, BusinessName } = location.state || {};
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to ProfilePage
};
const handleVendorInfoClick = () => {
  navigate('/vendorInfo'); // Navigate to profileInfo
};
const handleFarmerClick = (farmerName, businessName) => {
  navigate('/vendorDescription', {
    state: { farmerName, businessName }, // Pass farmer details to VendorDescription
  });
};
  return (
    <div className="homepage">
      <header className="header">
        <button onClick={toggleSidebar} className="bars-icon">☰</button>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search for Vendors" />
        </div>
      </header>
      <main className="farmer-list">
        <h2 className="farmer-list-title">Available Local Vendors</h2>
        <div className="farmer-items-container">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="farmer-item"
              onClick={() => handleFarmerClick(FarmerName || `Farmer ${index + 1}`, BusinessName || `Business ${index + 1}`)}>
              <div className="farmer-image"> <img src={farmer_icon} alt='farmer'/></div>
              <div className="farmer-description">
              <label>farmer's Name:</label> <input type='text' value={FarmerName} disabled /> 
              <label>Business Name:</label> <input type= 'text' value={BusinessName} disabled />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Sidebar with slide-in effect */}
      {showSidebar && (
        <aside className={`sidebar ${showSidebar ? 'slide-in' : ''}`}>
          <button onClick={handleProfileClick}>Profile</button> {/* Existing Profile button with navigation */}
          <button onClick={handleVendorInfoClick}>Become a Vendor</button>
        </aside>
      )}
    </div>
  );
};
