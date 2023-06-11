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
import PrivateRoutes from "./PrivateRoutes";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";

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
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'admin-home',
          element: <PrivateRoutes><AdminHome></AdminHome></PrivateRoutes>
        },
        {
          path: 'manage-classes',
          element: <PrivateRoutes><ManageClasses></ManageClasses></PrivateRoutes>
        },
        {
          path: 'manage-users',
          element: <PrivateRoutes><ManageUsers></ManageUsers></PrivateRoutes>
        },
        {
          path: 'selected-class',
          element: <PrivateRoutes><MySelectedClass></MySelectedClass></PrivateRoutes>
        },
        {
          path: 'enrolled-class',
          element: <PrivateRoutes><MyEnrolledClass></MyEnrolledClass></PrivateRoutes>
        },
        {
          path: 'payment-history',
          element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
        }
      ]
    }    
  ]);

 

 