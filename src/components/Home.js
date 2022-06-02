import React from "react";

function Home({ handleClick }) {


	return (
		<div>
			<h2>Inspect HTTP Requests</h2>
			<h3>RequestBin gives you a URL that will collect requests made to it and let you inspect them in a human-friendly way.
Use RequestBin to see what your HTTP client is sending or to inspect and debug webhook requests.</h3>
			<button type="button" id="createbin_btn" onClick={handleClick}>+ Create Request Bin</button>
		</div>
	);
}

export default Home;
