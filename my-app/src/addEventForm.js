import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const AddEventForm = ({ onAddEvent }) => {
    const [formData, setFormData] = useState({
        startDate: "",
        startTime: "",
        endTime: "",
        meetingDescription: "",
        availableUsers: [],
    });


    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const response = await axios.get("http://localhost:5000/api/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleUserCheckboxChange = (userId) => {
        setFormData((prevData) => {
            const availableUsers = (prevData.availableUsers || []).includes(userId)
                ? (prevData.availableUsers || []).filter((id) => id !== userId)
                : [...(prevData.availableUsers || []), userId];

            return {
                ...prevData,
                availableUsers,
            };
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/meeting", formData);
            console.log("Meeting added successfully:", response.data);
            onAddEvent(response.data);
            setFormData({
                startDate: "",
                startTime: "",
                endTime: "",
                meetingDescription: "",
                availableUsers: [],
            });
        } catch (error) {
            console.error("Error adding meeting:", error);
        }
    };







    console.log(users);
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Meeting Participants:
                {users.map((user) => (
                    <div key={user._id}>
                        <input
                            type="checkbox"
                            id={user._id}
                            name="selectedUsers"
                            checked={formData.availableUsers && formData.availableUsers.includes(user._id)}
                            onChange={() => handleUserCheckboxChange(user._id)}
                        />
                        <label htmlFor={user._id}>{user.Username}</label>
                    </div>
                ))}
            </label>


            <label>
                Start Date:
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Start Time:
                <input
                    type="text"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    placeholder="HH:MM AM/PM"
                    required
                />
            </label>
            <label>
                End Time:
                <input
                    type="text"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    placeholder="HH:MM AM/PM"
                    required
                />
            </label>
            <label>
                Meeting Description:
                <textarea
                    name="meetingDescription"
                    value={formData.meetingDescription}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add Event</button>
            <Link to="/" className="button-style">
                back to calendar
            </Link>
        </form>
    );
};
export default AddEventForm;