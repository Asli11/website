import React from "react";
import { Link } from "gatsby";

const Header = () => {
	return (
		<div className="header-link">
			<Link to="/">Coding-Tipps</Link>
			<p>
				{" "}
				written by <Link to="https://asli-web.netlify.app/">Asli</Link>
			</p>
		</div>
	);
};
export default Header;
