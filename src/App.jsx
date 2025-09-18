import { Routes, Route } from "react-router";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="wrapper">
      <a href="/"><img className="logo-pop" src="./src/assets/logo.png" alt="Anh Thu Logo" /></a>
      <div className="nav-hover-area">
        <Nav />
      </div>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </>
  );
}
export default App;
