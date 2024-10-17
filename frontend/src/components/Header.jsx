import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo2.svg";
// import { IoMenu } from "react-icons/io5";

const Header = () => {
	return <nav className="fixed glass w-full">
			<div className="flex items-center sm:gap-4 gap-20 w-full justify-between pl-10 pr-10">
				<Link to="/">
					<div className="flex h-[90px] overflow-hidden items-center justify-center">
						<img src={Logo} alt="Logo" width={200} className="nav__logo" />
					</div>
				</Link>
				<ul className="hidden md:flex items-center lg:gap-28 md:gap-16 sm:gap-10">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>
			</div>
			{/* <button className="nav__toggle-btn">Create Post</button> */}
		</nav>;
};

export default Header;
