import "./App.css";
import HamburgerNav from "./components/HamburgerNav";
import Navbar from "./components/Navbar";
import About from "./components/Sections/About";
import Profile from "./components/Sections/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerNav />
      <Profile />
      <About />
    </div>
  );
}

export default App;
