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
          alert('Error performing skill operation. Please try again.')
        }
      };
    
    return (
    <div className=' flex flex-row'>
        <div className='w-full'>
          <h1 className='text-7xl py-11 font-lato ml-24'>Welcome User!!</h1>
        <p className='text-2xl py-3 text-indigo-600 ml-24 font-lato'>Here you can manage skills of an Employee </p>
        <div className='flex flex-col w-56 py-7 gap-7 ml-24'>
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
      <button onClick={handleSkillAction} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      {/* {error && <p className="text-red-500">{error}</p>} */}
      
      </div>
      <Link to='/'>
      <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mt-28 ml-3">
        Back
      </button>
      </Link>
      </div>
      <div style={{ 
      backgroundImage: 'url("data:image/jpeg;base64,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")', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'right',
      width: '100%', // Cover half of the screen width
      minHeight: '100vh', // Ensure background covers entire viewport
      float: 'right', // Float the element to the right /* Ensure background covers entire viewport */
    }}></div>
    </div>
  )
}

export default ManageSkills