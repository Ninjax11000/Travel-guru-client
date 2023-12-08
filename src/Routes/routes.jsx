import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BCarousel from "../BCarousel/BCarousel";
import StartBooking from "../StartBooking/StartBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<BCarousel></BCarousel>
        },
        {
          path:'/booknow',
          element:<StartBooking></StartBooking>
        }
      ]
    },
  ]);

export default router;