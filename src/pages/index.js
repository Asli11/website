import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className="full-width-image-container margin-top-0"
					style={{
						/* backgroundImage: `url('/img/code.jpg')`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat", */
						width: "100%",
					}}
				>
					<h1
						className="has-text-weight-bold is-size-1"
						style={{
							color: "black",
							padding: "1rem",
						}}
					>
						Coding - Tipps
					</h1>
					<p>
						{" "}
						written by <Link to="https://asli-web.netlify.app/">Asli</Link>
					</p>
				</div>
				<section className="section">
					<div className="container">
						<div className="content">
							<BlogRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
