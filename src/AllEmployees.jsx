import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import { Link } from "react-router-dom";
import LastPage from "./LastPage";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // Initial page number
  const [maxPage, setMaxPage] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, [pageNumber]); // Fetch employees whenever the page number changes

  const fetchEmployees = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/get-all?pageNumber=${pageNumber}&pageSize=9`
      );
      setEmployees(response.data);
      // Check if there are no more employees to fetch
      if (response.data.length === 0) {
        setMaxPage(true); // Set maxPage to true if there are no more employees
      } else {
        setMaxPage(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle changing the page number
  const handleChangePage = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="text-black">
      <Link to="/home">
        <h1 className="ml-9 text-4xl font-lato py-1">ALL Employees</h1>
      </Link>
      
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap gap-7 justify-center">
          {maxPage===true?<LastPage/>:employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
        <div className="">
          <p className="font-serif font-bold py-5 text-center">
            Page {pageNumber + 1}
          </p>{" "}
          {/* Display current page number */}
          <button
            onClick={() => handleChangePage(pageNumber - 1)}
            disabled={pageNumber === 0} // Disable the button if on the first page
            className="px-4 py-2 bg-indigo-600 text-white rounded-md mr-2 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Previous Page
          </button>
          <button
            onClick={() => handleChangePage(pageNumber + 1)}
            disabled={maxPage} // Disable the button if there are no more employees
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllEmployees;
