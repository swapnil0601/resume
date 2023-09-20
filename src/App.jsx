import "./App.css";
import HamburgerNav from "./components/HamburgerNav";
import Navbar from "./components/Navbar";
import Education from "./components/Sections/Education";
import Footer from "./components/Sections/Footer";
import Profile from "./components/Sections/Profile";
import Projects from "./components/Sections/Projects/Projects";
import Skills from "./components/Sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerNav />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
