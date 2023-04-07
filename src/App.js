import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ProfessionalInfo from "./components/ProfessionalInfo/ProfessionalInfo";
import SocialLink from "./components/SocialLink/SocialLink";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <UserProfile />
      <AboutMe />
      <SocialLink />
      <ProfessionalInfo />
    </div>
  );
}

export default App;
