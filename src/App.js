import {
  Routes, Route, useNavigate
} from "react-router-dom";

// import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BinPage from "./components/BinPage";
import dbOps from "./services/db.js";

const App = () => {
	const navigate = useNavigate();
	
	const handleClick = () => {
		dbOps.createBin().then(data => {
      navigate(data.path);
		});
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
