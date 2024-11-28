// UserRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage"; // Ensure correct relative path
import { LoginSignup } from "../LoginSignup/LoginSignup"; // Ensure correct relative path
import {ProfilePage} from "../Profile/ProfilePage";
import {VendorInfo} from "../VendorInfo/VendorInfo";
import { VendorDescription } from "../VendorDescription/VendorDescription";
import Checkout from '../Checkout/Checkout'
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/vendorInfo" element={<VendorInfo/>} />
            <Route path="/vendorDescription" element={<VendorDescription/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    );
};

export default UserRoutes;
