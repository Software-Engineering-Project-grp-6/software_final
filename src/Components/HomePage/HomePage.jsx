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
  return (
    <div className="homepage">
      <header className="header">
        <button onClick={toggleSidebar} className="bars-icon">☰</button>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search for Vendors/Fruits/Vegetables/Meat/Eggs/etc..." />
        </div>
      </header>
      <main className="farmer-list">
        <h2 className="farmer-list-title">Available Local Farmers</h2>
        <div className="farmer-items-container">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="farmer-item">
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
          <button>Register Yourself as Vendor</button>
          <button>add/edit your Listings</button>
          <button>Order History</button>
        </aside>
      )}
    </div>
  );
};
