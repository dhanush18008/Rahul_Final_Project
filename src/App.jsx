import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import AllEmployees from './AllEmployees';
import SearchBySkills from './SearchBySkills';
import ManageEmployee from './ManageEmployee';
import ManageSkills from './ManageSkills';
import NotFound from './NotFound';

function App() {
 
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AllEmployees/>,
      errorElement:<NotFound/>
    },
    {
      path:'/search-by-skills',
      element:<SearchBySkills/>
    },
    {
      path:'/manageEmployee',
      element:<ManageEmployee/>
    },
    {
      path:'/manageSkills',
      element:<ManageSkills/>
    }
  ]);

  return (
    <div className='h-full'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
