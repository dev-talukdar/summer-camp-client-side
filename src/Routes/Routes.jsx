import {    createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login"; 
import Register from "../Pages/Shared/Register/Register";
import Classes from "../Pages/Classes/Classes"; 
import PopularInstructors from "../Pages/PopularInstructors/PopularInstructors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"; 
import Dashboard from "../Layout/Dashboard"; 
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import MyEnrolledClass from "../Pages/Dashboard/Student/MyEnrolledClass";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },        
        {
            path: 'instructors',
            element: <PopularInstructors></PopularInstructors>
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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'selected-class',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: 'enrolled-class',
          element: <MyEnrolledClass></MyEnrolledClass>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        }
      ]
    }    
  ]);

 

 