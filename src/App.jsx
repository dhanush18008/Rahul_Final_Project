import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import SearchBySkills from './SearchBySkills';
import ManageEmployee from './ManageEmployee';
import ManageSkills from './ManageSkills';
import NotFound from './NotFound';
import FrontPage from './FrontPage';
import AllEmployees from './AllEmployees';

function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <FrontPage />,
      errorElement: <NotFound />,
      children: [{
          path:'/',
          element:<AllEmployees/>        
        },
        {
          path: '/search-by-skills',
          element: <SearchBySkills />
        },
        {
          path: '/manageEmployee',
          element: <ManageEmployee />
        },
        {
          path: '/manageSkills',
          element: <ManageSkills />
        }
      ]
    }
  ]);
  

  return (
    <div className='h-full'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
