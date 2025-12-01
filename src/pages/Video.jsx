import React from "react";
import { Link } from "react-router-dom";

export default function Video() {
  const videos = [
    {
      id: 1,
      titulo: "Ethical Hacking Full Course - Learn Ethical Hacking in 10 Hours",
      youtubeId: "3FNYvj2U0HM", // Curso completo de Ethical Hacking
      cor: "text-cyan-400",
      shadow: "hover:shadow-cyan-500/50"
    },
    {
      id: 2,
      titulo: "Kali Linux Tutorial For Beginners",
      youtubeId: "lZAoFs75_cs", // Tutorial Kali Linux
      cor: "text-green-400",
      shadow: "hover:shadow-green-500/50"
    },
    {
      id: 3,
      titulo: "Complete Wireshark Course - Packet Analysis Tutorial",
      youtubeId: "lb1Dw0elw0Q", // Curso Wireshark
      cor: "text-purple-400",
      shadow: "hover:shadow-purple-500/50"
    },
    {
      id: 4,
      titulo: "Metasploit Framework Tutorial - Ethical Hacking",
      youtubeId: "8H0hW6kpBzY", // Tutorial Metasploit
      cor: "text-yellow-400",
      shadow: "hover:shadow-yellow-500/50"
    },
    {
      id: 5,
      titulo: "Python For Ethical Hacking - Build Your Own Tools",
      youtubeId: "3Kq1MIfTWCE", // Python para Hacking
      cor: "text-orange-400",
      shadow: "hover:shadow-orange-500/50"
    },
    {
      id: 6,
      titulo: "Burp Suite Professional Tutorial - Web Application Security",
      youtubeId: "GzLvqCTvOeQ", // Tutorial Burp Suite
      cor: "text-pink-400",
      shadow: "hover:shadow-pink-500/50"
    },
    {
      id: 7,
      titulo: "OSCP Preparation Guide - Tips & Resources",
      youtubeId: "Y4PpVqX0Q_w", // Preparação OSCP
      cor: "text-blue-400",
      shadow: "hover:shadow-blue-500/50"
    },
    {
      id: 8,
      titulo: "Active Directory Hacking - Full Course",
      youtubeId: "xF0XCg9iYwI", // Hacking Active Directory
      cor: "text-red-400",
      shadow: "hover:shadow-red-500/50"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A2E] min-h-screen text-white font-mono pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Cabeçalho */}
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-neon-cyan">
            Vídeos Educativos
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Assista a vídeos sobre hacking ético, cibersegurança e tecnologia. 
            Aprenda de forma prática com demonstrações e tutoriais detalhados.
          </p>
        </header>

        {/* Lista de vídeos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className={`bg-gradient-to-br from-[#0A192F] to-[#0D1B2A] rounded-xl sm:rounded-lg shadow-lg p-4 sm:p-6 ${video.shadow} transition-shadow duration-300`}
            >
              <h2 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${video.cor}`}>
                {video.titulo}
              </h2>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.titulo}
                  className="absolute top-0 left-0 w-full h-full rounded"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon-cyan mb-3 sm:mb-4">
            Continue sua jornada
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Explore nossos jogos educativos para testar seus conhecimentos de hacking ético.
          </p>
          <Link
            to="/jogos"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#00FF88] text-[#0D0D0D] font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Jogar Agora
          </Link>
        </section>
      </div>
    </div>
  );
}