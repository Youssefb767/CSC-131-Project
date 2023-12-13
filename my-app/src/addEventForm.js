// AddEventForm.js
import React, { useState } from "react";


const AddEventForm = ({ onAddEvent }) => {
    const [formData, setFormData] = useState({
        startDate: "",
        startTime: "",
        endTime: "",
        meetingDescription: "",
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
        onAddEvent(formData);
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
        </form>
    );
};

export default AddEventForm;
