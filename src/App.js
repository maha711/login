import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import { ToastContainer, toast } from "react-toastify";
import Home from "./component/home";
import Users from "./component/users";
import { Routes, Route } from "react-router-dom";
import Login from "./component/login";
import { AuthProvdier } from "./context/authcontext";
import ProtectedRoute from "./component/protectedRoute";
import User from "./component/user";

function App() {
  return (
    <div className="App">
      <AuthProvdier>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvdier>

      <ToastContainer />
    </div>
  );
}

export default App;
