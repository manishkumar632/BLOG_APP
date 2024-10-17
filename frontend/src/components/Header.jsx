import React from "react";
import { Link } from "react-router-dom"
import Logo from "../images/logo2.svg";
// import { IoMenu } from "react-icons/io5";

const Header = () => {
	return (
		<nav>
			<div className="container nav__container">
				<Link to="login">
					<img src={Logo} alt="Logo" width={200} className="nav__logo" />
				</Link>
				<ul className="nav__menu">
					<li>
						<Link to="/" className="text-3xl">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>9
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
				</ul>
				<button className="nav__toggle-btn">Create Post</button>
			</div>
		</nav>
	);
};

export default Header;
