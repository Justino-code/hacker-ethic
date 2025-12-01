import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGamepad, 
  FaArrowLeft, 
  FaExternalLinkAlt, 
  FaTrophy, 
  FaLock, 
  FaShieldAlt, 
  FaCode,
  FaNetworkWired,
  FaBrain,
  FaGraduationCap,
  FaChartLine,
  FaFilter,
  FaClock,
  FaBook,
  FaLaptopCode
} from "react-icons/fa";
import AdivinheAtaque from "./jogos/AdivinheAtaque";
import QuizSeguranca from "./jogos/QuizSeguranca";
import SimuladorFirewall from "./jogos/SimuladorFirewall";
import EncontrarVulnerabilidade from "./jogos/EncontrarVulnerabilidade";

export default function Jogos() {
  const jogos = [
    { 
      id: 1, 
      nome: "Adivinhe o Ataque", 
      componente: <AdivinheAtaque />,
      icone: <FaShieldAlt className="text-[#FF00FF]" />,
      descricao: "Teste seu conhecimento sobre diferentes tipos de ataques cibernéticos.",
      dificuldade: "Iniciante",
      tempo: "2-3 min",
      cor: "from-[#FF00FF] to-[#CC00CC]",
      categoria: "Reconhecimento"
    },
    { 
      id: 2, 
      nome: "Quiz de Segurança Ofensiva", 
      componente: <QuizSeguranca />,
      icone: <FaBrain className="text-[#00FF88]" />,
      descricao: "Desafie-se com perguntas técnicas sobre hacking ético e ferramentas.",
      dificuldade: "Intermediário",
      tempo: "5-7 min",
      cor: "from-[#00FF88] to-[#00CC66]",
      categoria: "Conhecimento"
    },
    { 
      id: 3, 
      nome: "Simulador de Firewall", 
      componente: <SimuladorFirewall />,
      icone: <FaNetworkWired className="text-[#00E5FF]" />,
      descricao: "Pratique a classificação de tráfego de rede em um firewall virtual.",
      dificuldade: "Prático",
      tempo: "4-5 min",
      cor: "from-[#00E5FF] to-[#0088CC]",
      categoria: "Redes"
    },
    { 
      id: 4, 
      nome: "Identificador de Vulnerabilidades", 
      componente: <EncontrarVulnerabilidade />,
      icone: <FaCode className="text-[#FFFF00]" />,
      descricao: "Analise códigos vulneráveis e identifique falhas de segurança.",
      dificuldade: "Avançado",
      tempo: "3-4 min",
      cor: "from-[#FFFF00] to-[#FFCC00]",
      categoria: "Programação"
    },
    { 
      id: 5, 
      nome: "CTF Challenge", 
      link: "https://picoctf.org",
      icone: <FaLock className="text-[#FF4444]" />,
      descricao: "Capture The Flag - Desafios reais de segurança cibernética (externo).",
      dificuldade: "Avançado",
      tempo: "Variável",
      cor: "from-[#FF4444] to-[#CC0000]",
      categoria: "CTF"
    },
    { 
      id: 6, 
      nome: "Cyber Range", 
      link: "https://tryhackme.com",
      icone: <FaGamepad className="text-[#9B59B6]" />,
      descricao: "Ambiente de treinamento com laboratórios práticos (externo).",
      dificuldade: "Todos",
      tempo: "Variável",
      cor: "from-[#9B59B6] to-[#8E44AD]",
      categoria: "Laboratório"
    },
    { 
      id: 7, 
      nome: "OWASP Top 10 Quiz", 
      link: "https://owasp.org/www-project-top-ten/",
      icone: <FaShieldAlt className="text-[#3498DB]" />,
      descricao: "Aprenda sobre as 10 principais vulnerabilidades web (OWASP).",
      dificuldade: "Intermediário",
      tempo: "10 min",
      cor: "from-[#3498DB] to-[#2980B9]",
      categoria: "Web"
    },
    { 
      id: 8, 
      nome: "Network Defense", 
      link: "https://cyberdefenders.org",
      icone: <FaNetworkWired className="text-[#2ECC71]" />,
      descricao: "Simulador de defesa de redes contra ataques cibernéticos.",
      dificuldade: "Intermediário",
      tempo: "15 min",
      cor: "from-[#2ECC71] to-[#27AE60]",
      categoria: "Defesa"
    },
  ];

  const [jogoSelecionado, setJogoSelecionado] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todos");
  const [dificuldadeFiltro, setDificuldadeFiltro] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  // Obter categorias únicas
  const categorias = ["Todos", ...new Set(jogos.map(jogo => jogo.categoria))];
  
  // Obter níveis de dificuldade únicos
  const dificuldades = ["Todos", ...new Set(jogos.map(jogo => jogo.dificuldade))];

  // Filtrar jogos
  const jogosFiltrados = jogos.filter(jogo => {
    const categoriaMatch = categoriaFiltro === "Todos" || jogo.categoria === categoriaFiltro;
    const dificuldadeMatch = dificuldadeFiltro === "Todos" || jogo.dificuldade === dificuldadeFiltro;
    const pesquisaMatch = pesquisa === "" || 
      jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      jogo.descricao.toLowerCase().includes(pesquisa.toLowerCase()) ||
      jogo.categoria.toLowerCase().includes(pesquisa.toLowerCase());
    
    return categoriaMatch && dificuldadeMatch && pesquisaMatch;
  });

  const jogoAtual = jogos.find((jogo) => jogo.id === jogoSelecionado);

  // Resetar filtros
  const resetarFiltros = () => {
    setCategoriaFiltro("Todos");
    setDificuldadeFiltro("Todos");
    setPesquisa("");
  };

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-mono p-4 md:p-6 lg:p-8">
      <AnimatePresence mode="wait">
        {!jogoSelecionado ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <header className="text-center mb-8 md:mb-12">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <div className="p-3 bg-gradient-to-r from-[#00E5FF] to-[#00FF88] rounded-xl">
                  <FaGamepad className="text-3xl text-black" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00E5FF] via-[#00FF88] to-[#FF00FF] text-transparent bg-clip-text">
                  Laboratório de Cibersegurança
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg"
              >
                Pratique suas habilidades em segurança cibernética através de jogos interativos e desafios educativos.
                <span className="block text-sm text-gray-500 mt-2">
                  Desenvolvido para estudantes, profissionais e entusiastas de segurança
                </span>
              </motion.p>
            </header>

            {/* Estatísticas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8"
            >
              <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-gray-800 hover:border-[#00E5FF] transition-all">
                <div className="text-2xl md:text-3xl font-bold text-[#00E5FF]">{jogos.length}</div>
                <div className="text-xs md:text-sm text-gray-400">Jogos Disponíveis</div>
              </div>
              <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-gray-800 hover:border-[#00FF88] transition-all">
                <div className="text-2xl md:text-3xl font-bold text-[#00FF88]">4</div>
                <div className="text-xs md:text-sm text-gray-400">Jogos Internos</div>
              </div>
              <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-gray-800 hover:border-[#FFFF00] transition-all">
                <div className="text-2xl md:text-3xl font-bold text-[#FFFF00]">{categorias.length - 1}</div>
                <div className="text-xs md:text-sm text-gray-400">Categorias</div>
              </div>
              <div className="bg-[#1A1A1A] p-3 md:p-4 rounded-xl border border-gray-800 hover:border-[#FF00FF] transition-all">
                <div className="text-2xl md:text-3xl font-bold text-[#FF00FF]">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Gratuito</div>
              </div>
            </motion.div>

            {/* Barra de Pesquisa e Filtros */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#1A1A1A] p-4 md:p-6 rounded-xl mb-8 border border-gray-800"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-300 flex items-center gap-2">
                  <FaFilter className="text-[#00E5FF]" />
                  Explorar Jogos
                </h2>
                
                <div className="relative w-full lg:w-auto">
                  <input
                    type="text"
                    placeholder="🔍 Pesquisar jogos..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    className="w-full lg:w-64 px-4 py-2 bg-[#222] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                  {pesquisa && (
                    <button
                      onClick={() => setPesquisa("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm text-gray-400">Categoria</label>
                    <span className="text-xs text-gray-500">
                      {categoriaFiltro === "Todos" ? "Todas" : categoriaFiltro}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorias.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setCategoriaFiltro(cat)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                          categoriaFiltro === cat 
                            ? "bg-gradient-to-r from-[#00E5FF] to-[#00B8E6] text-black font-bold" 
                            : "bg-[#222] hover:bg-[#2a2a2a] text-gray-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm text-gray-400">Dificuldade</label>
                    <span className="text-xs text-gray-500">
                      {dificuldadeFiltro === "Todos" ? "Todas" : dificuldadeFiltro}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dificuldades.map(diff => (
                      <button
                        key={diff}
                        onClick={() => setDificuldadeFiltro(diff)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                          dificuldadeFiltro === diff 
                            ? "bg-gradient-to-r from-[#00FF88] to-[#00CC66] text-black font-bold" 
                            : "bg-[#222] hover:bg-[#2a2a2a] text-gray-300"
                        }`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {(categoriaFiltro !== "Todos" || dificuldadeFiltro !== "Todos" || pesquisa) && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center"
                >
                  <span className="text-sm text-gray-400">
                    {jogosFiltrados.length} jogo{jogosFiltrados.length !== 1 ? 's' : ''} encontrado{jogosFiltrados.length !== 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={resetarFiltros}
                    className="text-sm text-[#FF4444] hover:text-red-400 transition-colors"
                  >
                    Limpar filtros
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Grid de Jogos */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-300">
                  {pesquisa ? `Resultados para "${pesquisa}"` : "Jogos Disponíveis"} 
                  <span className="text-[#00E5FF] ml-2">({jogosFiltrados.length})</span>
                </h2>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 hidden md:inline">
                    Ordenar por:
                  </span>
                  <select className="px-3 py-1.5 bg-[#222] border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-[#00E5FF]">
                    <option>Mais populares</option>
                    <option>Dificuldade (crescente)</option>
                    <option>Dificuldade (decrescente)</option>
                    <option>Tempo (mais curto)</option>
                  </select>
                </div>
              </div>
              
              {jogosFiltrados.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 bg-[#1A1A1A] rounded-xl border border-gray-800"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Nenhum jogo encontrado</h3>
                  <p className="text-gray-500 mb-4">Tente ajustar os filtros ou a pesquisa.</p>
                  <button
                    onClick={resetarFiltros}
                    className="px-4 py-2 bg-[#222] hover:bg-[#333] rounded-lg transition-colors"
                  >
                    Limpar filtros
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {jogosFiltrados.map((jogo) => (
                    <motion.div
                      key={jogo.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <div
                        onClick={() => jogo.componente ? setJogoSelecionado(jogo.id) : window.open(jogo.link, "_blank", "noopener,noreferrer")}
                        className={`p-4 md:p-5 rounded-xl cursor-pointer transition-all duration-300 border border-gray-800 hover:border-transparent h-full flex flex-col relative overflow-hidden ${
                          jogo.componente 
                            ? "bg-[#1A1A1A] hover:bg-gradient-to-br hover:from-[#1A1A1A] hover:via-[#1A1A1A] hover:to-[#2A2A2A]" 
                            : "bg-[#222] hover:bg-[#2A2A2A]"
                        }`}
                      >
                        {/* Gradiente de fundo no hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${jogo.cor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        {/* Indicador externo */}
                        {!jogo.componente && (
                          <div className="absolute top-3 right-3">
                            <FaExternalLinkAlt className="text-gray-500 text-sm" />
                          </div>
                        )}
                        
                        {/* Ícone */}
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${jogo.cor} w-fit mb-4`}>
                          <div className="text-xl md:text-2xl">
                            {jogo.icone}
                          </div>
                        </div>
                        
                        {/* Conteúdo */}
                        <div className="flex-1">
                          <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2 group-hover:text-white transition-colors">
                            {jogo.nome}
                          </h3>
                          
                          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                            {jogo.descricao}
                          </p>
                          
                          {/* Metadados */}
                          <div className="mt-auto space-y-3">
                            <div className="flex items-center justify-between text-xs">
                              <span className={`px-2 py-1 rounded ${
                                jogo.dificuldade === "Iniciante" ? "bg-green-900/30 text-green-400" :
                                jogo.dificuldade === "Intermediário" ? "bg-yellow-900/30 text-yellow-400" :
                                jogo.dificuldade === "Avançado" ? "bg-red-900/30 text-red-400" :
                                "bg-blue-900/30 text-blue-400"
                              }`}>
                                {jogo.dificuldade}
                              </span>
                              <span className="text-gray-500 flex items-center gap-1">
                                <FaGraduationCap className="text-xs" />
                                {jogo.categoria}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <FaClock className="text-xs" />
                                {jogo.tempo}
                              </span>
                              <span className="text-xs text-gray-300 flex items-center gap-1">
                                {jogo.componente ? (
                                  <>
                                    <FaGamepad className="text-[#00FF88]" />
                                    Jogar Agora
                                  </>
                                ) : (
                                  <>
                                    <FaExternalLinkAlt className="text-[#FF00FF]" />
                                    Site Externo
                                  </>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Efeito de hover */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${jogo.cor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Seção de Informações */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-[#1A1A1A] to-[#222] rounded-xl p-6 md:p-8 border border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#00E5FF] mb-4 flex items-center gap-2">
                    <FaTrophy />
                    Como Aproveitar ao Máximo
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#00FF88] mt-1">✓</span>
                      <span className="text-gray-300">Comece pelos jogos de nível Iniciante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00FF88] mt-1">✓</span>
                      <span className="text-gray-300">Pratique regularmente para reter conhecimento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00FF88] mt-1">✓</span>
                      <span className="text-gray-300">Anote os conceitos aprendidos em cada jogo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00FF88] mt-1">✓</span>
                      <span className="text-gray-300">Explore os recursos externos para aprofundar</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#00FF88] mb-4 flex items-center gap-2">
                    <FaChartLine />
                    Progresso Recomendado
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00FF88]"></div>
                      <div>
                        <p className="font-medium text-gray-300">Nível 1: Fundamentos</p>
                        <p className="text-sm text-gray-500">Adivinhe o Ataque → OWASP Quiz</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00E5FF]"></div>
                      <div>
                        <p className="font-medium text-gray-300">Nível 2: Técnico</p>
                        <p className="text-sm text-gray-500">Quiz Segurança → Identificador de Vulnerabilidades</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#FF00FF]"></div>
                      <div>
                        <p className="font-medium text-gray-300">Nível 3: Prático</p>
                        <p className="text-sm text-gray-500">Simulador Firewall → CTF Challenge</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="jogo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header do Jogo */}
            <div className="mb-8">
              <button
                onClick={() => setJogoSelecionado(null)}
                className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl transition-all duration-300 group mb-6 hover:scale-[1.02]"
              >
                <FaArrowLeft className="text-[#00E5FF] group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Voltar ao Menu de Jogos</span>
              </button>
              
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#222] rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${jogoAtual.cor}`}>
                        {jogoAtual.icone}
                      </div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-200">
                        {jogoAtual.nome}
                      </h1>
                    </div>
                    <p className="text-gray-400 max-w-2xl">
                      {jogoAtual.descricao}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="px-3 py-1.5 bg-[#333] rounded-lg">
                      <span className="text-sm text-gray-300">Categoria:</span>
                      <span className="ml-2 font-medium text-[#00E5FF]">{jogoAtual.categoria}</span>
                    </div>
                    <div className="px-3 py-1.5 bg-[#333] rounded-lg">
                      <span className="text-sm text-gray-300">Dificuldade:</span>
                      <span className={`ml-2 font-medium ${
                        jogoAtual.dificuldade === "Iniciante" ? "text-green-400" :
                        jogoAtual.dificuldade === "Intermediário" ? "text-yellow-400" :
                        jogoAtual.dificuldade === "Avançado" ? "text-red-400" :
                        "text-blue-400"
                      }`}>
                        {jogoAtual.dificuldade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Componente do Jogo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {jogoAtual.componente}
            </motion.div>
            
            {/* Dicas do Jogo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 bg-[#1A1A1A] rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-lg font-bold text-[#FFFF00] mb-4 flex items-center gap-2">
                <FaBook className="text-[#FFFF00]" />
                Dicas para Este Jogo
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="text-[#00FF88] font-bold">• Leia com atenção:</span> Preste atenção aos detalhes nas perguntas e códigos.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[#00FF88] font-bold">• Elimine opções:</span> Comece descartando as respostas claramente incorretas.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="text-[#00FF88] font-bold">• Pratique:</span> Quanto mais jogar, melhor será seu reconhecimento de padrões.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[#00FF88] font-bold">• Anote:</span> Registre os conceitos que você aprender durante o jogo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          <FaLaptopCode className="inline mr-2" />
          Laboratório de Cibersegurança • Educational Platform • {new Date().getFullYear()}
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Desenvolvido para fins educacionais. Praticar hacking ético apenas em ambientes autorizados.
        </p>
      </footer>
    </div>
  );
}