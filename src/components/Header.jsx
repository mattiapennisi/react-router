import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header id="header">
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">
                                    Home
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" aria-current="page">
                                    Chi siamo
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blogposts" aria-current="page">
                                    Blog
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}