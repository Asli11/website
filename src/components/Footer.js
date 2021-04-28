import React from "react";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-black has-text-white-ter">
				<p>copyright © {new Date().getFullYear()}</p>
			</footer>
		);
	}
};

export default Footer;
