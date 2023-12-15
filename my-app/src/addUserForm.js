import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './App.css';

const AddUserForm = ({ onAddUser }) => {
    const [formData, setFormData] = useState({
        Username:"",
        Password:"",
    });
  ;
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

            setFormData({
               Username:"",
               Password:"",
        });
    }catch (error){
            console.error("Error adding user:", error);
        }
    }

    return (
    <div class="center">
        <form onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="Username"
                    value={formData.Username}
                    onChange={handleChange}
                    required
                />
            
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder="password"
                    required
                />
            <button type="submit" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add User</button>
            <Link to="/" type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Back to Calendar
            </Link>
        </form>
    </div>
 );
};

export default AddUserForm;



