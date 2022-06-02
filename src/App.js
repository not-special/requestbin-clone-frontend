import {
  Routes, Route, useNavigate
} from "react-router-dom";

// import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BinPage from "./components/BinPage";
// import React, { useNavigate } from "react";
import dbOps from "./services/db.js";

/*
handleclick
post request with empty body to create new bin
*/

const App = () => {

	const navigate = useNavigate();
	
	const handleClick = () => {
		let path = null;
		dbOps.createBin().then(data => {
			path = data;
		});
    // let path = "3e00d609-6feb-4619-9411-941e5bb1b6e6";
		navigate(path);
	};

  return (
    <div className="App">
      <Navbar/>
			<Routes>
				<Route path="/" element={ <Home handleClick={handleClick} />} />
				<Route path={"/:path"} element={ <BinPage />} />
			</Routes>
    </div>
  );
};

export default App;
