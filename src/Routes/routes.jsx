import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import StartBooking from "../Components/StartBooking/StartBooking";
import Login from "../Components/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Components/Register/Register";
import Banner from "../Components/Banner/Banner";
import Hotels from "../Components/Hotels/Hotels";
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
          path:'/hotels/:id',
          element:<PrivateRoute><Hotels></Hotels></PrivateRoute>,
          loader:({params})=>fetch(`https://travel-guru-server-mjby2cmqo-ninjax11000.vercel.app/hotels/${params.id}`)
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