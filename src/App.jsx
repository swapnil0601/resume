import "./App.css";
import HamburgerNav from "./components/HamburgerNav";
import Navbar from "./components/Navbar";
import Profile from "./components/Sections/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerNav />
      <Profile />
    </div>
  );
}

export default App;
