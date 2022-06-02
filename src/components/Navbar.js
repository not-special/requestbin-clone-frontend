import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<nav id="navabar">
					<Link to="/">Home</Link>
			</nav>
			<Outlet />
		</div>
	);
}

export default Navbar;