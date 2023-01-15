import { useLocation, Link } from "react-router-dom";
import Authcontxt from "../context/authcontext";
import { useContext } from "react";

const Navbar = () => {
  const links = [
    { label: "home", path: "/" },
    { label: "users", path: "/users" },
  ];
  const { user, logout } = useContext(Authcontxt);
  const { pathname } = useLocation();
  // console.log(user.username);
  if (!user) return null;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((link, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    className={
                      pathname === link.path ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              {" "}
              <Link className="nav-link">{user.username}</Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
