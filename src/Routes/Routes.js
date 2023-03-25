import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Shared/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";

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
      }
    ]
  }
])