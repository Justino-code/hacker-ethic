import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPlay, FaClock, FaGraduationCap, FaGlobe } from "react-icons/fa";

export default function Video() {
  const videos = [
    {
      id: 1,
      titulo: "Curso Completo de Hacking Ético - Fundamentos",
      youtubeId: "H5FkAup6_9k",
      descricao: "Introdução completa ao hacking ético com conceitos fundamentais.",
      cor: "from-cyan-500 to-blue-600",
      tempo: "2h 15min",
      dificuldade: "Iniciante",
      idioma: "Português BR",
      canal: "Curso em Vídeo"
    },
    {
      id: 2,
      titulo: "Kali Linux para Iniciantes - Instalação e Comandos Básicos",
      youtubeId: "lZAoFs75_cs",
      descricao: "Tutorial completo de Kali Linux para pentesting.",
      cor: "from-green-500 to-emerald-600",
      tempo: "1h 30min",
      dificuldade: "Iniciante",
      idioma: "Inglês (legendas PT)",
      canal: "NetworkChuck"
    },
    {
      id: 3,
      titulo: "Análise de Tráfego com Wireshark - Do Básico ao Avançado",
      youtubeId: "Q2Q-uR6O7YE",
      descricao: "Aprenda a usar o Wireshark para análise forense de redes.",
      cor: "from-purple-500 to-violet-600",
      tempo: "45min",
      dificuldade: "Intermediário",
      idioma: "Português PT",
      canal: "Pplware"
    },
    {
      id: 4,
      titulo: "Metasploit Framework - Explorando Vulnerabilidades",
      youtubeId: "g7JXrTVUg4A",
      descricao: "Tutorial prático do Metasploit para testes de penetração.",
      cor: "from-yellow-500 to-amber-600",
      tempo: "1h 10min",
      dificuldade: "Intermediário",
      idioma: "Português BR",
      canal: "Diolinux"
    },
    {
      id: 5,
      titulo: "Python para Segurança - Criando Ferramentas de Pentest",
      youtubeId: "mdUTW8PA2t4",
      descricao: "Desenvolvimento de ferramentas de segurança com Python.",
      cor: "from-orange-500 to-red-600",
      tempo: "3h 20min",
      dificuldade: "Intermediário",
      idioma: "Português BR",
      canal: "Código Fonte TV"
    },
    {
      id: 6,
      titulo: "Burp Suite - Testando Aplicações Web",
      youtubeId: "zeSIXNudtHw",
      descricao: "Tutorial completo do Burp Suite para segurança web.",
      cor: "from-pink-500 to-rose-600",
      tempo: "1h 45min",
      dificuldade: "Intermediário",
      idioma: "Português PT",
      canal: "Segurança Informática"
    },
    {
      id: 7,
      titulo: "Preparação para Certificação OSCP - Dicas e Estratégias",
      youtubeId: "2wilQc-E0r8",
      descricao: "Guia completo para se preparar para a certificação OSCP.",
      cor: "from-blue-500 to-indigo-600",
      tempo: "1h 55min",
      dificuldade: "Avançado",
      idioma: "Inglês (legendas PT)",
      canal: "The Cyber Mentor"
    },
    {
      id: 8,
      titulo: "Segurança em Active Directory - Vulnerabilidades e Defesas",
      youtubeId: "gqYtM1XvLwg",
      descricao: "Análise de segurança em ambientes Active Directory.",
      cor: "from-red-500 to-pink-600",
      tempo: "2h 30min",
      dificuldade: "Avançado",
      idioma: "Português BR",
      canal: "TI Especialista"
    },
    {
      id: 9,
      titulo: "Introdução à Criptografia para Segurança",
      youtubeId: "wGeSPH_1Pmw",
      descricao: "Fundamentos de criptografia aplicada à segurança da informação.",
      cor: "from-teal-500 to-cyan-600",
      tempo: "1h 15min",
      dificuldade: "Iniciante",
      idioma: "Português BR",
      canal: "Universidade Linux"
    },
    {
      id: 10,
      titulo: "SQL Injection na Prática - Aprenda a Prevenir",
      youtubeId: "ciNHn38EyRc",
      descricao: "Demonstração prática de SQL Injection e prevenção.",
      cor: "from-lime-500 to-green-600",
      tempo: "50min",
      dificuldade: "Intermediário",
      idioma: "Português BR",
      canal: "Fabio Akita"
    },
    {
      id: 11,
      titulo: "Conceitos de Redes para Hacking Ético",
      youtubeId: "IpTxHyGqgN0",
      descricao: "Fundamentos de redes essenciais para pentesting.",
      cor: "from-indigo-500 to-purple-600",
      tempo: "2h",
      dificuldade: "Iniciante",
      idioma: "Português BR",
      canal: "Curso em Vídeo"
    },
    {
      id: 12,
      titulo: "CTF para Iniciantes - Resolvendo Desafios Reais",
      youtubeId: "1S0aBV-Waeo",
      descricao: "Introdução ao mundo de Capture The Flag.",
      cor: "from-amber-500 to-orange-600",
      tempo: "1h 25min",
      dificuldade: "Iniciante",
      idioma: "Inglês (legendas PT)",
      canal: "John Hammond"
    }
  ];

  const categorias = [
    "Todos",
    "Iniciante",
    "Intermediário",
    "Avançado",
    "Português BR",
    "Inglês"
  ];

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#1A1A2E] min-h-screen text-white font-mono pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Cabeçalho */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
              <FaYoutube className="text-2xl" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Biblioteca de Vídeos
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto mb-6"
          >
            Aprenda hacking ético e cibersegurança com vídeos educativos selecionados. 
            Conteúdos em português e inglês para todos os níveis.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
              <div className="text-lg sm:text-xl font-bold text-cyan-400">{videos.length}</div>
              <div className="text-xs text-gray-400">Vídeos</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
              <div className="text-lg sm:text-xl font-bold text-green-400">4</div>
              <div className="text-xs text-gray-400">Níveis</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
              <div className="text-lg sm:text-xl font-bold text-purple-400">6h+</div>
              <div className="text-xs text-gray-400">Conteúdo</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
              <div className="text-lg sm:text-xl font-bold text-yellow-400">2</div>
              <div className="text-xs text-gray-400">Idiomas</div>
            </div>
          </div>
        </motion.header>

        {/* Filtros */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800">
            <h2 className="text-lg sm:text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
              <FaGlobe className="text-cyan-400" />
              Filtrar Conteúdo
            </h2>
            <div className="flex flex-wrap gap-2">
              {categorias.map((cat, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Dica: Use as legendas do YouTube para vídeos em inglês
            </p>
          </div>
        </motion.section>

        {/* Lista de vídeos */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl shadow-xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Thumbnail do vídeo */}
                <div className="relative">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.titulo}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        video.dificuldade === "Iniciante" ? "bg-green-900/80 text-green-300" :
                        video.dificuldade === "Intermediário" ? "bg-yellow-900/80 text-yellow-300" :
                        "bg-red-900/80 text-red-300"
                      }`}>
                        {video.dificuldade}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-black/70 rounded text-xs">
                        {video.idioma}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 bg-red-600 rounded-full">
                        <FaPlay className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className="p-4 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {video.titulo}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {video.descricao}
                  </p>
                  
                  {/* Metadados */}
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-500" />
                        <span className="text-gray-400">{video.tempo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-gray-500" />
                        <span className="text-gray-400">{video.canal}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                      className="w-full py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-900 hover:to-blue-900 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                    >
                      <FaYoutube className="text-red-500" />
                      <span>Assistir no YouTube</span>
                    </button>
                  </div>
                </div>
                
                {/* Barra de gradiente */}
                <div className={`h-1 bg-gradient-to-r ${video.cor} opacity-80`} />
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Seção de Dicas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">
            🎯 Como Aproveitar os Vídeos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-green-400 mb-2">1. Escolha o Nível</div>
              <p className="text-sm text-gray-300">
                Comece pelos vídeos "Iniciante" e progrida conforme seu conhecimento aumenta.
              </p>
            </div>
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-yellow-400 mb-2">2. Pratique</div>
              <p className="text-sm text-gray-300">
                Não apenas assista - pratique os conceitos em ambientes controlados.
              </p>
            </div>
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-red-400 mb-2">3. Anote</div>
              <p className="text-sm text-gray-300">
                Mantenha um caderno com comandos, conceitos e dicas importantes.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-800">
            <p className="text-sm text-cyan-300">
              💡 <strong>Dica:</strong> Ative as legendas em português nos vídeos em inglês clicando no ícone de CC do YouTube.
            </p>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Conteúdo educativo para fins de aprendizado em segurança cibernética.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Todos os vídeos são de canais públicos do YouTube. Respeite os termos de uso.
          </p>
        </footer>
      </div>
    </div>
  );
}