import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {Services} from './components/Services';
import {Home }from './components/Home';
import {About} from './components/About';
import {Skills }from './components/Skills';
import {Contact} from './components/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />, 
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  
]);

function App() {
  return (

         <div className="App">
            <Navigation />
            <RouterProvider router={router} />
        </div>

  );
}

export default App;
