import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import SearchBySkills from './SearchBySkills';
import ManageEmployee from './ManageEmployee';
import ManageSkills from './ManageSkills';
import NotFound from './NotFound';
import FrontPage from './FrontPage';
import AllEmployees from './AllEmployees';
import LandingPage from './LandingPage';

function App() {
 
  const router = createBrowserRouter([
    {
    path:'/',
    element:<LandingPage/>,
    },
    {

      path: '/home',
      element: <FrontPage />,
      errorElement: <NotFound />,
      children: [{
          path:'/home',
          element:<AllEmployees/>        
        },
        {
          path: '/home/search-by-skills',
          element: <SearchBySkills />
        },
        {
          path: '/home/manageEmployee',
          element: <ManageEmployee />
        },
        {
          path: '/home/manageSkills',
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
