import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAvailabilityForm = () => {
    // State to store availability data
    const [availabilityData, setAvailabilityData] = useState({
        availabilityDate: '',
        startTime: '',
        endTime: '',
    });

    // State to store user data
    const [users, setUsers] = useState([]);

    // State to store selected user ID
    const [selectedUserID, setSelectedUserID] = useState('');

    // Fetch users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAvailabilityData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle user selection
    const handleUserSelect = (e) => {
        setSelectedUserID(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Post availability data to MongoDB backend with user ID
            const response = await axios.post(
                `http://localhost:5000/api/users/${selectedUserID}/availability`,
                availabilityData
            );

            console.log('Availability added successfully:', response.data);

            // Reset the form
            setAvailabilityData({
                availabilityDate: '',
                startTime: '',
                endTime: '',
            });

            // Reset the selected user
            setSelectedUserID('');
        } catch (error) {
            console.error('Error adding availability:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select User:
                <select
                    name="selectedUserID"
                    value={selectedUserID}
                    onChange={handleUserSelect}
                >
                    <option value="" disabled>
                        Select a user
                    </option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>
                            {user.Username}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Availability Date:
                <input
                    type="date"
                    name="availabilityDate"
                    value={availabilityData.availabilityDate}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Start Time:
                <input
                    type="text"
                    name="startTime"
                    value={availabilityData.startTime}
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
                    value={availabilityData.endTime}
                    onChange={handleChange}
                    placeholder="HH:MM AM/PM"
                    required
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddAvailabilityForm;
