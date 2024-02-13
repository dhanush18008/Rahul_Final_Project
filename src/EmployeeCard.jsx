import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
<div className="bg-slate-200 p-4 rounded-md shadow-md hover:shadow-2xl w-80 ml-7 h-40 flex flex-col justify-center items-start">
  <h2 className="text-black font-bold">Name : {employee.firstName} {employee.secondName}</h2>
  <p className="text-black">Date of Birth: {employee.dob}</p>
  <p className="text-black">Department: {employee.department}</p>
  <p className="text-black">Manager ID: {employee.managerId}</p>
  <p className="text-black">Skills: {employee.skills.join(', ')}</p>
</div>

  );
}

export default EmployeeCard;
