import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div id="homee">
				<table style={{ width: "80%", margin: "10" }}>
					<tbody>
						<tr>
							<td rowSpan="2">
								<img src={require("./portrait.jpg")} alt="" id="image" />
							</td>
							<td id="intro">
								<p>
									Hi, my name is Tanatswa. <br></br>
									<br></br>I am currently a student at the University of
									Pretoria, working towards obtaining a BSc degree in Computer
									Science.
									<br></br>
									<br></br>I am eager to learn the foundations of the tech
									industry and determined to gain work experience before pursing
									an Honour's degree in Computer Science.
								</p>
							</td>
						</tr>
						<tr>
							<td id="motivation">
								<p>
									I want to be a developer at SovTech because to be the best,
									you have to learn from the best. SovTech boasts a brilliant
									team so I know I'll be working with some of South Africa's
									greatest software developers and software engineers.
									<br></br>
									<br></br>
									My personal values and proffesional goals align with dynamism,
									innovation and continous development. I believe that I will be
									an asset to the team and know I will be challenged. And that
									is why I want to work as a developer at SovTech.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Home;
