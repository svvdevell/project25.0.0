import {NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="header container">
            <img src={logo} alt="Logo"/>
            <nav>
                <ul className="navbar">
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="/" end>Home</NavLink>
                    </li>
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="users">Users</NavLink>
                    </li>
                    <li><NavLink className={({isActive}) => (isActive ? "active" : "")} to="hotels">Hotels</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;