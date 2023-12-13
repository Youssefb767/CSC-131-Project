// AddEventForm.js
import React, { useState } from "react";


const AddEventForm = ({ onAddEvent }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== "") {
            onAddEvent({ title });
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Event Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;
