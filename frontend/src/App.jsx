import Login from "./pages/auth";
import SignUpView from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import MessagesPage from "./pages/Messages/MessagesPage";
import ProfilesPage from "./pages/profile/ProfilesPage";
import NotificationsPage from "./pages/Notifications/NotificationsPage";

function App() {
	return (
		<>
			<NavBar />
			<div className="lg:pt-20 pt-10 w-full h-screen">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />;
					<Route path="/signup" element={<SignUpView />} />
					<Route path="/notifications" element={<NotificationsPage />} />
					<Route path="/messages" element={<MessagesPage />} />
					<Route path="/profile/:id" element={<ProfilesPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
