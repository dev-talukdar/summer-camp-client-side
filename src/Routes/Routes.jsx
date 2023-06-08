import {    createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Register from "../Pages/Shared/Register/Register";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },        
        {
            path: 'instructors',
            element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
      },
        {
          path: 'login',
          element: <Login></Login>
      },
      {
          path: 'register',
          element: <Register></Register>
      },

      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>
    }
  ]);

 

 