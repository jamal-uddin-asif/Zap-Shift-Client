import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BeARider from "../Pages/BeARider/BeARider";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/sendParcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader:()=> fetch('./serviceCenter.json')
            },
            {
                path:"/beARider",
                element: <PrivateRoute><BeARider></BeARider></PrivateRoute>

            },
            {
                path: 'coverage',
                Component: Coverage,
                loader:()=> fetch('./serviceCenter.json')
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])