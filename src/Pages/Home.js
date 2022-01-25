import "../Styling/Home.css";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="welcome">
        <h2>Welcome to my Budget App!</h2>
      </div>
    </>
  );
}

export default Home;