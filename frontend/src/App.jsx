import Login from "./pages/auth";
import SignUpView from "./pages/Signup";
import UsersList from "./pages/UsersList";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar";

function App() {
	return (
		<div className="w-full h-screen">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />;
				<Route path="/users" element={<UsersList />} />
				<Route path="/signup" element={<SignUpView />} />
			</Routes>
		</div>
	);
}

export default App;
