import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import item_icon from '../Assets/item.jpg';
import './VendorDescription.css';

export const VendorDescription = () => {
    const navigate = useNavigate();

    const [vInfo, setvInfo] = useState({
        VendorName: '',
        BusinessName: '',
        email: '',
        BusinessAddress: '',
        PostalCode: '',
        Phone: '',
        LicenseNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setvInfo({
            ...vInfo,
            [name]: value,
        });
    };

    const handleBack = () => {
        navigate('/home'); // Navigate back to the home page
    };

    return (
        <div className="background3">
            <div className="Post-container3">
                <h2>Vendor's Portfolio</h2>

                <div className="PostYourL-info13">
                    {Object.keys(vInfo).map((field, index) => (
                        <div className="row3" key={index}>
                            <p><b>{field.replace(/([A-Z])/g, ' $1')}:</b></p>
                            <input
                                type="text"
                                name={field}
                                value={vInfo[field]}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    ))}
                </div>
                <p>_____________________________________________________________________________________________________________________________________________</p>

                <div className="farmer-items-container23">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="farmer-item23">
                            <div className="farmer-image23">
                                <img src={item_icon} alt="item" />
                            </div>
                            <div className="farmer-description23">
                                <label>Item:</label>
                                <input
                                    type="text"
                                    value={`Item ${index + 1}`} // Example dynamic item name
                                    disabled // Makes the input read-only
                                />
                                <label>Price:</label>
                                <input
                                    type="text"
                                    value={`$${(index + 1) * 2}.00`} // Example dynamic price
                                    disabled // Makes the input read-only
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Home button */}
                <button onClick={handleBack} className="back-home-button3">Back to Home</button>
            </div>
        </div>
    );
};
