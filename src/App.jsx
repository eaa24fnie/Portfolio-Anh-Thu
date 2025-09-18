import { Routes, Route } from "react-router";
import Project from "./pages/Project";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="wrapper">
      <a href="/"><img className="logo-pop" src="/assets/logo.png" alt="Anh Thu Logo" /></a>
        <Nav />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </>
  );
}
export default App;
