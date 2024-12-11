import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login } = useCart(); // Lấy hàm login từ CartContext
    const navigate = useNavigate(); // Khai báo navigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/users");
            const users = await response.json();
            const user = users.find(
                (u) => u.email === formData.email && u.password === formData.password
            );
            if (user) {
                alert("Sign in successful!");
                login(user); // Cập nhật trạng thái user trong CartContext
                navigate("/"); // Chuyển hướng về trang chủ sau khi đăng nhập
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
