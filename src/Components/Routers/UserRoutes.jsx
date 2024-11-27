// UserRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage"; // Ensure correct relative path
import { LoginSignup } from "../LoginSignup/LoginSignup"; // Ensure correct relative path
import {ProfilePage} from "../Profile/ProfilePage";
import {VendorInfo} from "../VendorInfo/VendorInfo";
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/vendorInfo" element={<VendorInfo/>} />
        </Routes>
    );
};

export default UserRoutes;
