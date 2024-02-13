import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ManageSkills() {
 
    const [formData, setFormData] = useState({
        id: '',
        skill: '',
        action: ''
      });
      const [error, setError] = useState('');
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSkillAction = async () => {
        try {
            console.log(formData);
          const response = await axios.post('http://localhost:8080/add-skills', {
            id: parseInt(formData.id), // Convert id to integer
            skill: formData.skill,
            action: formData.action
          });
          console.log(response.data); // Log the response from the server
          alert(`Skill "${formData.skill}" ${formData.action === 'ADD' ? 'added' : 'deleted'} successfully.`);
          // Clear form data after successful submission
          setFormData({ id: '', skill: '', action: '' });
          setError('');
        } catch (error) {
          console.error('Error:', error);
          setError('Error performing skill operation. Please try again.');
        }
      };
    
    return (
    <div className='bg-slate-300 h-screen'>
        <h1 className='text-7xl font-serif ml-14 py-11'>Welcome User!!</h1>
        <p className='text-2xl text-center py-3'>Here you can manage skills of an Employee by following 3 simple steps:</p>
        <ol className='text-center '>
            <li className=' py-3'>Enter EmployeeID</li>
            <li className='mr-14 py-3'>Enter Skill</li>
            <li className='mr-3 py-2'>Enter Operation</li>
        </ol>
        <div className='flex flex-col flex-grow ml-96 mr-96 py-7 gap-7'>
        <input
        className='content-center'
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder=" Employee ID"
      />
      <input
        type="text"
        name="skill"
        value={formData.skill}
        onChange={handleChange}
        placeholder=" Skill"
      />
      
      <select
        name="action"
        value={formData.action}
        onChange={handleChange}
      >
        <option value="">Select an action</option>
        <option value="ADD">Add Skill</option>
        <option value="DELETE">DELETE Skill</option>
      </select>
      <button onClick={handleSkillAction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      {error && <p className="text-red-500">{error}</p>}
      
      </div>
      <Link to='/'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 ">
        Back
      </button>
      </Link>
    </div>
  )
}

export default ManageSkills