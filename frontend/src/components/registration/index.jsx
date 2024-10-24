/* eslint-disable react/react-in-jsx-scope */
import { Button, Card, TextInput, Avatar } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
	const [data, setData] = useState({
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		username: "",
	});

	const navigate = useNavigate();

	const onChange = (e) => {
		setData({ ...data, [e.target.id]: e.target.value });
	};

	const onSubmit = () => {
		if (
			data.email === "" ||
			data.password === "" ||
			data.first_name === "" ||
			data.last_name === "" ||
			data.username === ""
		)
			alert("All fields are required");
		axios
			.post("http://localhost:8000/api/signup", data)
			.then(() => {
				alert("Success");
				navigate("/users");
			})
			.catch(() => {
				alert("Failed to submit");
			});
	};

	return (
		<center style={{ marginTop: "5vh" }}>
			<Card className="max-w-md">
				<Avatar img="/user.png" rounded size="xl" />
				<h3 className="text-center text-xl mb-4 mt-4">Welcome to Chit-Chat</h3>
				<form className="flex flex-col gap-4">
					<div>
						<TextInput
							id="first_name"
							placeholder="First Name"
							required
							type="text"
							onChange={onChange}
						/>
					</div>
					<div>
						<TextInput
							id="last_name"
							placeholder="Last Name"
							required
							type="text"
							onChange={onChange}
						/>
					</div>
					<div>
						<TextInput
							id="username"
							placeholder="Username"
							required
							type="text"
							onChange={onChange}
						/>
					</div>
					<div>
						<TextInput
							id="email"
							placeholder="Email"
							required
							type="email"
							onChange={onChange}
						/>
					</div>
					<div>
						<TextInput
							id="password"
							required
							type="password"
							placeholder="Password"
							onChange={onChange}
						/>
					</div>

					<Button onClick={onSubmit}>Register</Button>
				</form>
			</Card>
		</center>
	);
}
