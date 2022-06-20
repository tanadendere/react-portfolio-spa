import React, { Component } from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<table style={{ width: "100%" }}>
						<tbody>
							<tr>
								<th id="name">Tanatswa Dendere</th>
								<th rowSpan="2">
									<ul className="header">
										<li>
											<NavLink to="/">Home</NavLink>
										</li>
										<li>
											<NavLink to="/about">About</NavLink>
										</li>
										<li>
											<NavLink to="/contact">Contact</NavLink>
										</li>
									</ul>
								</th>
							</tr>
							<tr>
								<td id="descr">BSc Computer Science Student</td>
							</tr>
						</tbody>
					</table>
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
