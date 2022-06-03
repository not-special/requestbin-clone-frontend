import React from "react";

function Home({ handleClick }) {


	return (
		<div className="container-main">
			<div className="main-box">
			<h2>Inspect HTTP Requests</h2>
			<h3>Snaggl generates a URL that will collect requests made to it and let you inspect them in a human-friendly way.
          Use Snaggl to see what your HTTP client is sending or to inspect and debug webhook requests.</h3>
			<button type="button" id="createbin_btn" className="button" onClick={handleClick}>+ Create Snaggl Bin</button>
			</div>
		</div>
	);
}

export default Home;
