import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BCarousel from "../BCarousel/BCarousel";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<BCarousel></BCarousel>
        }
      ]
    },
  ]);

export default router;