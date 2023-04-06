import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import SocialLink from "./components/SocialLink/SocialLink";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
      <AboutMe />
      <SocialLink />
    </div>
  );
}

export default App;
