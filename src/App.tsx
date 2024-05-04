import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState<string>("4")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
   <div className='App'>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
