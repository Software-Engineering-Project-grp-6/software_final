import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import item_icon from '../Assets/item.jpg';
import './VendorInfo.css';

export const VendorInfo = () => {
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

    const [items, setItems] = useState([]); // State for dynamic items

    const handleChange = (e) => {
        const { name, value } = e.target;
        setvInfo({
            ...vInfo,
            [name]: value,
        });
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index] = {
            ...updatedItems[index],
            [field]: value,
        };
        setItems(updatedItems);
    };

    const addItem = () => {
        setItems([...items, { item: '', price: '' }]);
    };

    const handlePost = () => {
        if (
            Object.values(vInfo).some((value) => value.trim() === '') ||
            items.some((item) => item.item.trim() === '' || item.price.trim() === '')
        ) {
            alert('Please fill out all fields before posting.');
            return;
        }

        console.log('Vendor Info:', vInfo);
        console.log('Items:', items);

        navigate('/home');
    };

    return (
        <div className="background">
            <div className="Post-container">
                <h2>Post Your Listings</h2>

                <div className="PostYourL-info1">
                    {Object.keys(vInfo).map((field, index) => (
                        <div className="row" key={index}>
                            <p><b>{field.replace(/([A-Z])/g, ' $1')}:</b></p>
                            <input
                                type="text"
                                name={field}
                                value={vInfo[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <p>_____________________________________________________________________________________________________________________________________________</p>

                <div className="farmer-items-container2">
                    {items.map((item, index) => (
                        <div key={index} className="farmer-item2">
                            <div className="farmer-image2">
                                <img src={item_icon} alt="item" />
                            </div>
                            <div className="farmer-description2">
                                <label>Item:</label>
                                <input
                                    type="text"
                                    value={item.item}
                                    onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                                />
                                <label>Price:</label>
                                <input
                                    type="text"
                                    value={item.price}
                                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={addItem} className="add-item-button">Add Item</button>
                <button onClick={handlePost} className="post-button">Post</button>
            </div>
        </div>
    );
};
