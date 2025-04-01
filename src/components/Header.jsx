import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header id="header">
            <NavLink to="/">Home</ NavLink>
            <NavLink to="/about">About</ NavLink>
            <NavLink to="/blogposts">Blog</ NavLink>
        </header>
    )
}