import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Interests from "./components/Interests/Interests";
import PassSecurity from "./components/PassSecurity/PassSecurity";
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
      <PassSecurity />
      <Interests />
    </div>
  );
}

export default App;
