import "../css/home.css";
import HomeAnimation from "../components/HomeAnimation";

const Home = () => {
  return (
    <div className="home">
            <h1>Welcome</h1>

      <p>
        Welcome to FreeMindz
        your 24/7 mental health support platform.
      </p>
      <HomeAnimation/>
      <p>Ready to dive into chat?</p>
    </div>
  );
};

export default Home;
