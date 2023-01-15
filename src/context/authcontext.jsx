import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Authcontxt = createContext();
export default Authcontxt;

export const AuthProvdier = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };
  const log = (valuse, setLodning, setInputDisabeld) => {
    setTimeout(() => {
      const logUser = users.find(
        (u) => u.username === valuse.username && u.password === valuse.password
      );
      if (logUser) {
        setUser(true);
        localStorage.setItem("user", JSON.stringify(logUser));
        navigate("/");
      } else {
        toast.error("username && password is invalid", { theme: "colored" });
        setInputDisabeld(false);
        setLodning(false);
      }
    }, 2000);
  };

  return (
    <Authcontxt.Provider value={{ user, setUser, logout, log }}>
      {children}
    </Authcontxt.Provider>
  );
};
const users = [
  { username: "maha", password: "111" },
  { username: "huda", password: "111" },
];
