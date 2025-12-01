import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuizSeguranca() {
  const perguntas = [
    {
      id: 1,
      pergunta: "Qual ferramenta é normalmente usada para escanear portas e serviços em um host?",
      opcoes: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
      resposta: "Nmap",
      categoria: "Ferramentas",
      info: "Nmap é amplamente usado para descoberta de rede e varredura de portas.",
      dificuldade: "Fácil"
    },
    {
      id: 2,
      pergunta: "Qual é a vulnerabilidade que permite inserir scripts maliciosos em páginas web?",
      opcoes: ["XSS", "SQLi", "CSRF", "Clickjacking"],
      resposta: "XSS",
      categoria: "Vulnerabilidades Web",
      info: "XSS (Cross-Site Scripting) permite a execução de scripts no contexto do navegador da vítima.",
      dificuldade: "Média"
    },
    {
      id: 3,
      pergunta: "O que significa 'privilege escalation'?",
      opcoes: [
        "Elevar a prioridade do sistema",
        "Obter permissões mais altas no sistema",
        "Desativar privilégio de um usuário",
        "Escalonar tráfego de rede"
      ],
      resposta: "Obter permissões mais altas no sistema",
      categoria: "Conceitos",
      info: "Privilege escalation é obter permissões superiores (ex.: de user para root).",
      dificuldade: "Fácil"
    },
    {
      id: 4,
      pergunta: "Qual ataque explora consultas de banco de dados mal construídas?",
      opcoes: ["XSS", "SQL Injection", "DoS", "ARP Spoofing"],
      resposta: "SQL Injection",
      categoria: "Vulnerabilidades Web",
      info: "SQLi permite manipular consultas SQL se entradas não forem corretamente tratadas.",
      dificuldade: "Fácil"
    },
    {
      id: 5,
      pergunta: "Qual técnica é usada para interceptar e analisar pacotes de rede em tempo real?",
      opcoes: ["Brute Force", "Sniffing", "Spoofing", "Phishing"],
      resposta: "Sniffing",
      categoria: "Redes",
      info: "Packet sniffing captura tráfego de rede para análise (ex.: Wireshark).",
      dificuldade: "Média"
    },
    {
      id: 6,
      pergunta: "O que é um 'CSRF'?",
      opcoes: [
        "Um tipo de malware",
        "Ataque que força ação do utilizador autenticado",
        "Uma técnica de criptografia",
        "Uma falha de rede"
      ],
      resposta: "Ataque que força ação do utilizador autenticado",
      categoria: "Vulnerabilidades Web",
      info: "CSRF (Cross-Site Request Forgery) força ações a partir de um usuário autenticado.",
      dificuldade: "Média"
    },
    {
      id: 7,
      pergunta: "Qual é o propósito principal de um firewall?",
      opcoes: [
        "Acelerar a rede",
        "Controlar tráfego entre redes",
        "Criptografar dados",
        "Monitorar temperatura do servidor"
      ],
      resposta: "Controlar tráfego entre redes",
      categoria: "Redes",
      info: "Firewalls filtram tráfego baseado em regras de segurança.",
      dificuldade: "Fácil"
    },
    {
      id: 8,
      pergunta: "O que é 'phishing'?",
      opcoes: [
        "Ataque de força bruta",
        "Engenharia social via email/site falso",
        "Varredura de portas",
        "Injeção de código"
      ],
      resposta: "Engenharia social via email/site falso",
      categoria: "Engenharia Social",
      info: "Phishing tenta enganar usuários para revelar informações sensíveis.",
      dificuldade: "Fácil"
    },
    {
      id: 9,
      pergunta: "Qual protocolo é considerado inseguro e substituído por TLS?",
      opcoes: ["HTTP", "FTP", "SSL", "TCP"],
      resposta: "SSL",
      categoria: "Criptografia",
      info: "SSL foi substituído pelo mais seguro TLS (Transport Layer Security).",
      dificuldade: "Média"
    },
    {
      id: 10,
      pergunta: "O que é um 'zero-day' vulnerability?",
      opcoes: [
        "Vulnerabilidade com patch disponível",
        "Vulnerabilidade desconhecida do fornecedor",
        "Bug que aparece à meia-noite",
        "Falha de hardware"
      ],
      resposta: "Vulnerabilidade desconhecida do fornecedor",
      categoria: "Conceitos",
      info: "Zero-day é uma vulnerabilidade não conhecida publicamente e sem patch disponível.",
      dificuldade: "Difícil"
    }
  ];

  const [index, setIndex] = useState(0);
  const [selecionada, setSelecionada] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(30);
  const [respostas, setRespostas] = useState([]);

  const atual = perguntas[index];

  useEffect(() => {
    if (!finalizado && tempoRestante > 0) {
      const timer = setTimeout(() => {
        setTempoRestante(tempoRestante - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (tempoRestante === 0 && !selecionada) {
      setFeedback("⏰ Tempo esgotado! Vamos para a próxima.");
      setTimeout(() => {
        if (index < perguntas.length - 1) {
          setIndex(i => i + 1);
          setTempoRestante(30);
          setSelecionada(null);
          setFeedback("");
        } else {
          setFinalizado(true);
        }
      }, 1500);
    }
  }, [tempoRestante, finalizado, selecionada, index]);

  function escolher(op) {
    if (selecionada) return;
    
    setSelecionada(op);
    const correto = op === atual.resposta;
    
    setRespostas(prev => [...prev, { 
      perguntaId: atual.id, 
      resposta: op, 
      correto,
      tempo: 30 - tempoRestante 
    }]);
    
    if (correto) {
      setFeedback("✅ Correto!");
      // Pontuação baseada no tempo e dificuldade
      let pontos = 10;
      if (tempoRestante > 20) pontos += 5; // Bônus por resposta rápida
      if (atual.dificuldade === "Difícil") pontos += 5;
      else if (atual.dificuldade === "Média") pontos += 2;
      setScore(s => s + pontos);
    } else {
      setFeedback(`❌ Errado — resposta correta: ${atual.resposta}`);
    }

    setTimeout(() => {
      if (index < perguntas.length - 1) {
        setIndex(i => i + 1);
        setSelecionada(null);
        setFeedback("");
        setTempoRestante(30);
      } else {
        setFinalizado(true);
      }
    }, 2000);
  }

  function reiniciar() {
    setIndex(0);
    setSelecionada(null);
    setFeedback("");
    setScore(0);
    setFinalizado(false);
    setTempoRestante(30);
    setRespostas([]);
  }

  const progressoPercent = Math.round(((index) / perguntas.length) * 100);

  const calcularEstatisticas = () => {
    const corretas = respostas.filter(r => r.correto).length;
    const tempoMedio = respostas.length > 0 
      ? Math.round(respostas.reduce((sum, r) => sum + r.tempo, 0) / respostas.length)
      : 0;
    
    return { corretas, tempoMedio };
  };

  const { corretas, tempoMedio } = calcularEstatisticas();

  if (finalizado) {
    const porcentagem = Math.round((score / (perguntas.length * 10)) * 100);
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl shadow-2xl border border-gray-800"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-6 text-center">
          🏁 Quiz Concluído!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-[#222] p-6 rounded-xl text-center">
              <p className="text-5xl md:text-6xl font-bold text-[#00E5FF]">{score}</p>
              <p className="text-gray-400 mt-2">Pontos Totais</p>
            </div>
            
            <div className="bg-[#222] p-4 rounded-xl">
              <h3 className="text-lg font-bold text-[#00E5FF] mb-3">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Acertos:</span>
                  <span className="text-[#00FF88] font-bold">{corretas}/{perguntas.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tempo médio:</span>
                  <span className="text-yellow-400 font-bold">{tempoMedio}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Porcentagem:</span>
                  <span className="text-[#00E5FF] font-bold">{porcentagem}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#222] p-6 rounded-xl">
            <h3 className="text-lg font-bold text-[#00FF88] mb-4">🏆 Classificação</h3>
            
            {porcentagem >= 90 ? (
              <div className="text-center">
                <div className="text-4xl mb-3">🎖️</div>
                <p className="text-xl font-bold text-yellow-400">Mestre da Cibersegurança</p>
                <p className="text-gray-300 mt-2">Excelente! Você domina os conceitos fundamentais.</p>
              </div>
            ) : porcentagem >= 70 ? (
              <div className="text-center">
                <div className="text-4xl mb-3">⭐</div>
                <p className="text-xl font-bold text-green-400">Intermediário Avançado</p>
                <p className="text-gray-300 mt-2">Bom trabalho! Continue estudando para aperfeiçoar.</p>
              </div>
            ) : porcentagem >= 50 ? (
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <p className="text-xl font-bold text-blue-400">Conhecedor Básico</p>
                <p className="text-gray-300 mt-2">Bom começo! Revise os tópicos para melhorar.</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-xl font-bold text-orange-400">Iniciante</p>
                <p className="text-gray-300 mt-2">Continue aprendendo! A prática leva à perfeição.</p>
              </div>
            )}
            
            <div className="mt-6">
              <h4 className="font-bold text-gray-300 mb-2">Dicas para melhorar:</h4>
              <ul className="text-sm text-gray-400 space-y-1 list-disc ml-4">
                <li>Pratique com laboratórios online (TryHackMe, HackTheBox)</li>
                <li>Estude as vulnerabilidades OWASP Top 10</li>
                <li>Participe de CTFs (Capture The Flag)</li>
                <li>Leia blogs especializados em segurança</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reiniciar}
            className="px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#00B8E6] text-black font-bold rounded-lg hover:opacity-90 transition-all"
          >
            🔄 Jogar Novamente
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 bg-[#333] text-gray-300 font-bold rounded-lg hover:bg-[#444] transition-all"
          >
            ↑ Voltar ao Topo
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#00FF88] mb-2">Quiz de Segurança Ofensiva</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Pergunta {index + 1} de {perguntas.length} • 
            <span className="ml-2 px-2 py-1 bg-[#333] rounded text-xs">
              {atual.categoria} • {atual.dificuldade}
            </span>
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00E5FF]">{score}</div>
            <div className="text-xs text-gray-400">Pontos</div>
          </div>
          
          <div className="relative">
            <div className="w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#333"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={tempoRestante > 10 ? "#00FF88" : "#FF4444"}
                  strokeWidth="3"
                  strokeDasharray={`${(tempoRestante / 30) * 100}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`font-bold ${tempoRestante > 10 ? "text-[#00FF88]" : "text-[#FF4444]"}`}>
                  {tempoRestante}s
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progresso</span>
          <span>{Math.round((index / perguntas.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-[#0f0f0f] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00FF88]"
            initial={{ width: "0%" }}
            animate={{ width: `${(index / perguntas.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <div className="mb-8">
        <div className="bg-[#222] p-4 md:p-6 rounded-lg mb-6">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{atual.pergunta}</p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-[#333] rounded text-xs text-gray-400">
              Categoria: {atual.categoria}
            </span>
            <span className={`px-2 py-1 rounded text-xs ${
              atual.dificuldade === "Fácil" ? "bg-green-900 text-green-300" :
              atual.dificuldade === "Média" ? "bg-yellow-900 text-yellow-300" :
              "bg-red-900 text-red-300"
            }`}>
              {atual.dificuldade}
            </span>
          </div>
        </div>

        {/* Opções */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {atual.opcoes.map((op) => {
            const isSelected = selecionada === op;
            const isCorrect = op === atual.resposta;
            
            return (
              <motion.button
                key={op}
                onClick={() => escolher(op)}
                disabled={!!selecionada}
                className={`p-3 md:p-4 rounded-lg text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? isCorrect
                      ? "bg-green-900 border-2 border-green-500"
                      : "bg-red-900 border-2 border-red-500"
                    : "bg-[#222] hover:bg-[#2a2a2a] hover:scale-[1.02]"
                }`}
                whileHover={{ scale: selecionada ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected
                      ? isCorrect
                        ? "bg-green-700"
                        : "bg-red-700"
                      : "bg-[#333]"
                  }`}>
                    <span className="font-bold">
                      {atual.opcoes.indexOf(op) + 1}
                    </span>
                  </div>
                  <span className="font-medium text-gray-200 text-sm md:text-base">{op}</span>
                </div>
                
                {isSelected && (
                  <div className="absolute top-2 right-2 text-xl">
                    {isCorrect ? "✅" : "❌"}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-6 ${
            feedback.includes("✅") 
              ? "bg-green-900/30 border border-green-500" 
              : "bg-red-900/30 border border-red-500"
          }`}
        >
          <p className="font-medium mb-2">{feedback}</p>
          {atual.info && (
            <p className="text-sm text-gray-300">
              💡 {atual.info}
            </p>
          )}
        </motion.div>
      )}

      {/* Navegação */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          Dica: Leia atentamente cada pergunta antes de responder
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={reiniciar}
            className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
          >
            🔄 Reiniciar Quiz
          </button>
          
          <button
            onClick={() => {
              if (index < perguntas.length - 1) {
                setIndex(i => i + 1);
                setSelecionada(null);
                setFeedback("");
                setTempoRestante(30);
              } else {
                setFinalizado(true);
              }
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#00E5FF] to-[#00B8E6] text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm"
            disabled={!selecionada && feedback === ""}
          >
            {index === perguntas.length - 1 ? "Ver Resultado →" : "Próxima Pergunta →"}
          </button>
        </div>
      </div>
    </div>
  );
}