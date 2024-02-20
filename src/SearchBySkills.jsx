import React, { useState } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import {Link} from 'react-router-dom';

function SearchBySkills() {
  
    const [searchTerms, setSearchTerms] = useState('');
    const [searchType, setSearchType] = useState('ANY'); // Default search type
    const [employees, setEmployees] = useState([]);
    
    const handleChange = (e) => {
      setSearchTerms(e.target.value);
    };
  
    const handleSearchTypeChange = (newSearchType) => {
      setSearchType(newSearchType);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        // Split the search terms by space and trim each term
        const skills = searchTerms.split(',').map(term => term.trim());
        // Make a POST request to the backend API
        // console.log(skills);
        // console.log(searchType);
        const response = await axios.post('http://localhost:8080/find-by-skills', {
          skills: skills,
          searchType: searchType // Use the selected search type
        });
        setEmployees(response.data);
  
        // Pass the search results to the onSearch callback function
        console.log(response.data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    };
  
  
  
    return (
    <div className=' manage-empolyee h-screen w-full'>
      <h1 className='text-7xl font-lato ml-20 py-5 '>Welcome User!!</h1>
      <p className='font-crimson text-center ml-24 py-3 text-indigo-800 text-2xl font-semibold'>Search the Employees Skills according to your needs!</p>
        <form onSubmit={handleSubmit} className="ml-96">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerms}
        onChange={handleChange}
        className="mr-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <select
        value={searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value)}
        className="mr-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="ANY">Any</option>
        <option value="ALL">All</option>
        <option value="REGEX">Regex</option>
      </select>
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-double focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
        Search
      </button>
    </form>
    <div className=" flex flex-col items-center mt-8">    
    <div className="flex flex-wrap gap-7 justify-center">
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
    <Link to='/home'>
      <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded ml-5 ">
        Back
      </button>
      </Link>
    </div>
  )
}

export default SearchBySkills