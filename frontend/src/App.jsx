import Login from "./pages/auth";
import UsersList from "./pages/UsersList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
}

export default App;
