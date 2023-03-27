import React from 'react'
import {createBrowserRouter, useParams} from 'react-router-dom'
import App from '../App'

import '../index.css'
import RenderUser from '../routes/RenderUser'
import StudentDiningHallHome, {
    loader as diningHallHomeLoader,
} from "../routes/studentDiningHallHome";
import StudentMenuForDay, {loader as menuForDayLoader} from "../routes/studentMenuForDay";
import Login from "../routes/Login";
import StudentUniversityHome from "../routes/studentUniversityHome";
import StudentEventForDay from "../routes/studentEventForDay";
import AdminHome from '../pages/adminHome'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Login />,
            },
            {
                path: "/renderuser/",
                element: <RenderUser />,
            },
            {
                path: '/student/university/:universityId/',
                element: <StudentUniversityHome />,
                //insert loader here for uni data
            },
            {
                path: '/student/dininghall/:universityId/:diningHallId/:diningHallName',
                element: <StudentDiningHallHome />,
                loader: diningHallHomeLoader,
            },
            {
                path: '/student/day/menu/:diningHallId/:month/:day/:year',
                element: <StudentMenuForDay />,
                loader: menuForDayLoader,
            },
            {
                path: '/student/day/event/:diningHallId/:month/:day/:year',
                element: <StudentEventForDay />,
                //insert loader here for event datad
            },
            {
                path: "/adminhome",
                element: <AdminHome />,
                //insert loader here for event datad
            }
        ]
    }
])//