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
    // Call the onSubmit function passed from the parent component
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='py-10 flex flex-col gap-4 w-60 ml-44'>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder=" First Name"
      />
      <input
        type="text"
        name="secondName"
        value={formData.secondName}
        onChange={handleChange}
        placeholder=" Second Name"
      />
      <input
        type="text"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder=" Date of Birth (YYYY-MM-DD)"
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder=" Department"
      />
      <input
        type="text"
        name="managerId"
        value={formData.managerId}
        onChange={handleChange}
        placeholder=" Manager ID"
      />

      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Submit</button>
    </form>
  );
}

export default EmployeeForm;
