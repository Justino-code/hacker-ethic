import { Link } from "react-router-dom";
import { FaHome, FaBook, FaMusic, FaVideo, FaGamepad } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#0A192F] text-cyan-400 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold font-mono text-[#00E5FF]">CyberEthic</h1>
      <ul className="flex gap-6">
        <li><Link className="hover:text-[#00FF88]" to="/"><FaHome /> Home</Link></li>
        <li><Link className="hover:text-[#00FF88]" to="/artigo"><FaBook /> Artigo</Link></li>
        <li><Link className="hover:text-[#00FF88]" to="/audio"><FaMusic /> Áudio</Link></li>
        <li><Link className="hover:text-[#00FF88]" to="/video"><FaVideo /> Vídeo</Link></li>
        <li><Link className="hover:text-[#00FF88]" to="/jogos"><FaGamepad /> Jogos</Link></li>
      </ul>
    </nav>
  );
}
