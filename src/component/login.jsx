import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Authcontxt from "../context/authcontext";

const Login = () => {
  const { user, setUser, log } = useContext(Authcontxt);
  const [valuse, setValues] = useState({ username: "", password: "" });

  const [lodning, setLodning] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [inputDisabeld, setInputDisabeld] = useState(false);

  // const navigate = useNavigate();

  const handelInput = (e) => {
    const newValuse = { ...valuse };
    newValuse[e.target.name] = e.target.value;
    setValues(newValuse);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setLodning(true);
    setInputDisabeld(true);
    log(valuse, setLodning, setInputDisabeld);
  };
  if (user) return Navigate("/");
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handelSubmit}>
          <fieldset disabled={inputDisabeld}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control "
                id="username"
                name="username"
                value={valuse.username}
                placeholder="username"
                onChange={handelInput}
              />
              <label htmlhtmlhtmlhtmlFor="floatingInput">username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control "
                id="password"
                name="password"
                value={valuse.password}
                placeholder="Password"
                onChange={handelInput}
              />
              <label htmlhtmlhtmlhtmlFor="floatingPassword">Password</label>
            </div>
          </fieldset>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            disabled={
              valuse.username === "" || valuse.password === "" || lodning
            }
          >
            {lodning && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
        </form>
      </main>
    </>
  );
};

export default Login;
