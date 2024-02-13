import React from 'react'
import { useState , useEffect} from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function AllEmployees() {
    const [employees, setEmployees] = useState([]);
    const [pageNumber, setPageNumber] = useState(0); // Initial page number
    const [maxPage,setMaxPage]=useState(false);
    useEffect(() => {
        fetchEmployees();
      }, [pageNumber]); // Fetch employees whenever the page number changes
    
      const fetchEmployees = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/get-all?pageNumber=${pageNumber}&pageSize=9`);
          setEmployees(response.data);
          console.log(maxPage);
        //   if(===null){
        //     setMaxPage(true);
        //     console.log(maxPage);
        // }  
        } catch (error) {
            console.log(error);
        }
      };
    
      // Function to handle changing the page number
      const handleChangePage = (newPageNumber) => {
        setPageNumber(newPageNumber);
      };
    
  
  
  
  
    return (
    <div className='text-black all-employee '>
        <Link to='/'>
        <h1 className='ml-40 text-3xl font-serif font-bold '>ALL Employees</h1>  
        </Link>
        <NavBar/>  
     <div className="flex flex-col items-center ">
      <div className="flex flex-wrap gap-7 justify-center">
        {employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
      <div className="mt-7">
        <button
          onClick={() => handleChangePage(pageNumber - 1)}
          disabled={pageNumber === 0} // Disable the button if on the first page
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Previous Page
        </button>
        <button
          onClick={() => handleChangePage(pageNumber + 1)}
          disabled={maxPage===true}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          Next Page
        </button>
      </div>
    </div>
    </div>
  )
}

export default AllEmployees