import Login from "./pages/auth";
import SignUpView from "./pages/Signup";
import UsersList from "./pages/UsersList";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />;
			<Route path="/users" element={<UsersList />} />
			<Route path="/signup" element={<SignUpView />} />
		</Routes>
	);
}

export default App;
