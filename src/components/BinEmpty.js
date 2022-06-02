// import React from "react";
// import { useEffect } from "react";

// const BinEmpty = ({ url, path }) => {
// 	useEffect(() => {
// 		const fetchRequests = async () => {
// 			await fetch(`http://localhost:3001/bin/${path}`, {
// 				method: "POST"
// 			}).then(requests => {
// 					console.log(requests);
// 				});
// 		};
// 		fetchRequests();
// 	}, []);

// 	return (
// 		<div>
// 		<h4>Bin URL:</h4>
// 		<h2>{ url }</h2>
// 		<h4>Make a request to get started</h4>
// 		<h5>cURL</h5>
// 		<pre>
// 			curl -X POST -d &quot;fizz=buzz&quot; http://v1.requestbin.net/r/fot5ok5r
// 		</pre>
// 		<h5>PowerShell</h5>
// 		<pre>
// 		powershell -NoLogo -Command &quot;(New-Object System.Net.WebClient).DownloadFile(&apos;http://v1.requestbin.net/r/fot5ok5r&apos;, &apos;C:\Windows\Temp\fot5ok5r.txt&apos;)&quot;
// 		</pre>
// 	</div>
// 	);
// };

// export default BinEmpty;