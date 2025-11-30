import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artigo from "./pages/Artigo";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import Jogos from "./pages/Jogos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigo" element={<Artigo />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/video" element={<Video />} />
        <Route path="/jogos" element={<Jogos />} />
      </Routes>
    </Router>
  );
}

export default App;
