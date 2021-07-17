import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {};

	const handleSubmenu = (e) => {};
	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" className="nav-logo" />
					<button className="btn-navbar toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Products
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Developers
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							Company
						</button>
					</li>
				</ul>
				<button className="btn-navbar signin-btn">
					Sign in{" "}
					<span>
						{" "}
						<FaChevronRight className="right-arrow" />{" "}
					</span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
