import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CheckOut from "../Pages/CheckOut/CheckOut";
import BookedServices from "../Pages/BookedServices/BookedServices";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/checkout/:id',
            element:<CheckOut/>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/bookings',
            element:<PrivetRoute><BookedServices/></PrivetRoute>,
            
        }
      ]
    },
  ]);

  export default router;