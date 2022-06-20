import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<div>
				<br></br>
				<br></br>
				<h2>Get in touch</h2>
				<br></br>
				<br></br>
				<table style={{ width: "30%" }}>
					<tbody>
						<td>
							<img src={require("./icons/email.png")} alt="" id="icon" />
						</td>
						<td>tanatswa.dendere@gmail.com</td>
						<tr>
							<td>
								<img src={require("./icons/phone.png")} alt="" id="icon" />
							</td>
							<td>+27 60 844 7062</td>
						</tr>
						<tr>
							<td>
								<img src={require("./icons/linkedin.png")} alt="" id="icon" />
							</td>
							<td>
								<a href="www.linkedin.com/in/tanadendere">LinkedIn Profile</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Contact;
