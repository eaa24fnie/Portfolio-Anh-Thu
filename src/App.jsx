import { Routes, Route } from "react-router";
import Project from "./pages/Project";
import Chat from "./pages/Chat";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <section>
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
 
    </section>
  );
}
export default App;
