import { useContext } from "react";
import Authcontxt from "../context/authcontext";

const Home = () => {
  const { user } = useContext(Authcontxt);
  return (
    <>
      <h1>page home</h1>
    </>
  );
};

export default Home;
