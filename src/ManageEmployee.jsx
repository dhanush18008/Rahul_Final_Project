import React, { useState } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import { Link } from'react-router-dom';
import './index.css';

function ManageEmployee() {

    const [selectedOption, setSelectedOption] = useState('');
    const [employeeId, setEmployeeId] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleEmployeeIdChange = (event) => {
      setEmployeeId(event.target.value);
    };
  
    const handleSubmit = async (formData) => {
      try {
        if (selectedOption === 'addEmployee') {
          // Logic to add employee using Spring Boot REST API
          const response = await axios.post('http://localhost:8080/add-employee', formData);
          console.log(response.data); // Log the response from the server
          alert('Employee added successfully.');
        } else if (selectedOption === 'removeEmployee') {
          // Logic to remove employee using Spring Boot REST API
          const response = await axios.post(`http://localhost:8080/remove-employee/${employeeId}`);
          console.log(response.data); // Log the response from the server
          alert(`Employee with ID ${employeeId} has been successfully deleted.`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  

  return (
    <div className='manage-empolyee h-screen'>
        <h1 className='text-7xl font-serif ml-14 py-11 '>Welcome User!!</h1>
        <p className='font-serif text-2xl ml-16'>To Manage employees select the desired option and give the required details to proceed</p>
         <div className="mt-4">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-double ml-44"
        >
          <option value="">Select an option</option>
          <option value="addEmployee">Add Employee</option>
          <option value="removeEmployee">Remove Employee</option>
        </select>
        {selectedOption === 'removeEmployee' && (
          <input
            type="text"
            value={employeeId}
            onChange={handleEmployeeIdChange}
            placeholder="Enter Employee ID"
            className="px-4 py-2 ml-4 bg-white border border-gray-300 rounded-md focus:outline-none"
          />
        )}
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
      <Link to='/'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 ">
        Back
      </button>
      </Link>
    </div>
  )
}

export default ManageEmployee