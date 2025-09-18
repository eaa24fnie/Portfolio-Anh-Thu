import { Navigate, Routes, Route } from "react-router";
import Projects from "../src/pages/Projects";
import About from "../src/pages/About";
import Chat from "../scr/pages/Chat";
import Nav from "../scr/components/Nav";
import Home from "../scr/pages/Home";

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
