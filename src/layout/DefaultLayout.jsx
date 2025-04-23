import { Outlet } from "react-router-dom"

import HeaderNavBar from "../components/HeaderNavBar.jsx"

export default function DefaultLayout() {

    return (
        <div>
            <HeaderNavBar />
            <Outlet />
        </div>
    )
}