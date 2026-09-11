import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../Component/allPages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Component/allPages/Auth/Login/Login";
import Register from "../Component/allPages/Auth/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => 
          fetch('service-center.json').then(res => res.json())
      }
    ],
  },
  {
    path:"/",
    Component: AuthLayout,
    children:[
      {
        path:"/login",
        Component: Login,
      },
      {
        path:"/register",
        Component: Register,
      }
    ]
  }


]);
