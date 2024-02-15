import React, { useState } from 'react';

function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    dob: '',
    department: '',
    managerId: '',
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any required field is empty
    if (!formData.firstName.trim() || !formData.secondName.trim() || !formData.dob.trim() || !formData.department.trim()) {
      window.alert('First Name, Second Name, Date of Birth, and Department are required fields.');
      return; // Exit early if any field is empty
    }

    // All fields are filled, proceed with form submission
    onSubmit(formData);

    // Clear form data
    setFormData({
      firstName: '',
      secondName: '',
      dob: '',
      department: '',
      managerId: '',
      skills: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className='py-10 flex flex-col gap-4 w-60 ml-44'>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      <input
        type="text"
        name="secondName"
        value={formData.secondName}
        onChange={handleChange}
        placeholder="Enter your second name"
      />
      <input
        type="text"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="Enter your DoB (YYYY-MM-DD)"
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Enter your department"
      />
      <input
        type="text"
        name="managerId"
        value={formData.managerId}
        onChange={handleChange}
        placeholder="Enter your manager ID"
      />
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Submit</button>
    </form>
  );
}

export default EmployeeForm;
