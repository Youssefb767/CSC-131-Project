import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        Username:"",
        Password:"",
    });
    //const [isSubmitted, setIsSubmitted] = useState(false);
    //const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:5000/api/users", formData);
            console.log("User added successfully:", response.data);
        onAddUser(response.data);
        // Optionally, you can reset the form state here
        setFormData({
           Username:"",
           Password:"",
        });
    }catch (error){
            console.error("Error adding user:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                username:
                <input
                    type="text"
                    name="Username"
                    value={formData.Username}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                password:
                <input
                    type="text"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder="password"
                    required
                />
            </label>
            <button type="submit">add user</button>
            <Link to="/" className="button-style">
                back to calendar
            </Link>
        </form>
    );
};

export default AddUserForm;



