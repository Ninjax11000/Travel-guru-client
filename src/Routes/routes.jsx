import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BCarousel from "../BCarousel/BCarousel";
import StartBooking from "../StartBooking/StartBooking";
import Login from "../Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Register/Register";
import Banner from "../Banner/Banner";
import Hotels from "../Hotels/Hotels";
import PrivateRoute from "./privateroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Banner></Banner>
        },
        {
          path:'/booknow',
          element:<StartBooking></StartBooking>
        },
        {
          path:'/hotels',
          element:<PrivateRoute><Hotels></Hotels></PrivateRoute>
        }
       
      ]
    },
    {
      path:'/login',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/login/register',
          element:<Register></Register>
        }
      ]
    }
  ]);

export default router;