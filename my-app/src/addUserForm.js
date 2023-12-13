import React, { useState } from "react";
import {Link} from "react-router-dom";

const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddUser(formData);
        // Optionally, you can reset the form state here
        setFormData({
            startDate: "",
            startTime: "",
            endTime: "",
            meetingDescription: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                password:
                <input
                    type="text"
                    name="password"
                    value={formData.startTime}
                    onChange={handleChange}
                    placeholder="password"
                    required
                />
            </label>

            <Link to="/" className="button-style">
                back to calendar
            </Link>
        </form>
    );
};

export default AddUserForm;



