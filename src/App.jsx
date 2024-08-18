
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Navbar from './main/navbar'
import Binary from './main/Binary';
import Decimal from './main/Decimal';
import Octal from './main/Octal';
import Hexadecimal from './main/Hexadecimal';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <><Navbar/><Binary/></>  // Or any component you want to show on the home page
    },
    {
      path: "/Binary",
      element:<><Navbar/><Binary/></>
    },
    {
      path: "/Decimal",
      element:<><Navbar/><Decimal/></>
    },
    {
      path: "/Octal",
      element:<><Navbar/><Octal/></>
    },
    {
      path: "/Hexadecimal",
      element:<><Navbar/><Hexadecimal/></>
    }
])
  return (


    <>
     
     <RouterProvider router={router}/>
     
      
    </>
  )
}


export default App
