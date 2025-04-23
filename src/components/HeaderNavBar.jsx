import { NavLink } from "react-router-dom"

export default function HeaderNavBar() {

    return (

        <nav>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    )
}