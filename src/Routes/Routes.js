import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Shared/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Orders from "../Pages/Orders/Orders";
import NotFound from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path : '/*',
        element: <NotFound></NotFound>
      }
    ]
  }
])