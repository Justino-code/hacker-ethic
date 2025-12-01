import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdivinheAtaque() {
  const perguntas = [
    {
      id: 1,
      pergunta: "Um ataque onde o invasor tenta adivinhar senhas repetidamente é chamado de:",
      opcoes: ["Phishing", "Brute Force", "MITM", "SQL Injection"],
      resposta: "Brute Force",
      icone: "🔨",
      explicacao: "Ataque de força bruta tenta todas combinações possíveis até acertar a senha.",
      categoria: "Ataques de Autenticação"
    },
    {
      id: 2,
      pergunta: "Um e-mail falso tentando roubar credenciais é chamado de:",
      opcoes: ["Phishing", "DDoS", "Ransomware", "Backdoor"],
      resposta: "Phishing",
      icone: "🎣",
      explicacao: "Phishing usa engenharia social para enganar usuários e roubar informações.",
      categoria: "Engenharia Social"
    },
    {
      id: 3,
      pergunta: "Um ataque que intercepta comunicação entre duas partes é:",
      opcoes: ["MITM", "XSS", "Trojan", "Sniffing"],
      resposta: "MITM",
      icone: "👂",
      explicacao: "Man-in-the-Middle intercepta e possivelmente altera a comunicação.",
      categoria: "Ataques de Rede"
    },
    {
      id: 4,
      pergunta: "Código malicioso injetado em páginas web é típico de:",
      opcoes: ["XSS", "Ransomware", "Spoofing", "Botnet"],
      resposta: "XSS",
      icone: "💉",
      explicacao: "Cross-Site Scripting injeta scripts maliciosos executados no navegador da vítima.",
      categoria: "Vulnerabilidades Web"
    },
    {
      id: 5,
      pergunta: "Ataque que sobrecarrega um serviço com tráfego é:",
      opcoes: ["DDoS", "Phishing", "SQLi", "Keylogger"],
      resposta: "DDoS",
      icone: "🌊",
      explicacao: "Distributed Denial of Service usa múltiplos sistemas para sobrecarregar um alvo.",
      categoria: "Ataques de Rede"
    },
    {
      id: 6,
      pergunta: "Malware que criptografa dados e pede resgate é:",
      opcoes: ["Ransomware", "Spyware", "Adware", "Rootkit"],
      resposta: "Ransomware",
      icone: "💰",
      explicacao: "Ransomware criptografa arquivos e exige pagamento para descriptografar.",
      categoria: "Malware"
    },
    {
      id: 7,
      pergunta: "Falsificação de endereço IP ou MAC é:",
      opcoes: ["Spoofing", "Sniffing", "Hijacking", "Pharming"],
      resposta: "Spoofing",
      icone: "🎭",
      explicacao: "Spoofing falsifica identidade para contornar sistemas de segurança.",
      categoria: "Ataques de Rede"
    },
    {
      id: 8,
      pergunta: "Software disfarçado de legítimo mas com funcionalidade maliciosa é:",
      opcoes: ["Trojan", "Vírus", "Worm", "Bot"],
      resposta: "Trojan",
      icone: "🐴",
      explicacao: "Trojan (Cavalo de Troia) se disfarça como software útil para enganar usuários.",
      categoria: "Malware"
    }
  ];

  const [index, setIndex] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [respostasCorretas, setRespostasCorretas] = useState(0);

  const atual = perguntas[index];

  useEffect(() => {
    if (resultado) {
      const timer = setTimeout(() => {
        setResultado(null);
        setMostrarExplicacao(false);
        setIndex((prev) => (prev + 1) % perguntas.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [resultado]);

  function responder(opcao) {
    if (resultado) return;
    
    const correto = opcao === atual.resposta;
    
    if (correto) {
      setResultado("correto");
      setPontuacao(prev => prev + 10);
      setStreak(prev => prev + 1);
      setRespostasCorretas(prev => prev + 1);
    } else {
      setResultado("errado");
      setStreak(0);
    }
    
    setMostrarExplicacao(true);
  }

  function pularPergunta() {
    setResultado(null);
    setMostrarExplicacao(false);
    setIndex((prev) => (prev + 1) % perguntas.length);
  }

  function reiniciarJogo() {
    setIndex(0);
    setResultado(null);
    setPontuacao(0);
    setStreak(0);
    setMostrarExplicacao(false);
    setRespostasCorretas(0);
  }

  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF00FF] mb-2">Adivinhe o Ataque</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Pergunta {index + 1} de {perguntas.length} • 
            <span className="text-[#00FF88] font-bold ml-2">{pontuacao} pontos</span>
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-400">🔥 {streak}</div>
            <div className="text-xs text-gray-400">Streak</div>
          </div>
          
          <button
            onClick={reiniciarJogo}
            className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
          >
            🔄 Reiniciar
          </button>
        </div>
      </div>

      {/* Categoria e Ícone */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-3xl">{atual.icone}</div>
        <div>
          <span className="px-3 py-1 bg-[#333] rounded-full text-xs text-gray-300">
            {atual.categoria}
          </span>
        </div>
      </div>

      {/* Pergunta */}
      <div className="mb-8">
        <div className="bg-[#222] p-4 md:p-6 rounded-lg mb-6">
          <h3 className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {atual.pergunta}
          </h3>
        </div>

        {/* Opções */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {atual.opcoes.map((op) => {
            const isSelected = resultado && op === atual.resposta;
            const isWrong = resultado && op !== atual.resposta && resultado === "errado";
            
            return (
              <motion.button
                key={op}
                onClick={() => responder(op)}
                disabled={resultado}
                className={`p-3 md:p-4 rounded-lg transition-all ${
                  isSelected
                    ? "bg-green-900 border-2 border-green-500"
                    : isWrong
                    ? "bg-red-900 border-2 border-red-500"
                    : "bg-[#222] hover:bg-[#2a2a2a] hover:scale-[1.02]"
                }`}
                whileHover={{ scale: resultado ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-200 text-sm md:text-base">{op}</span>
                  {isSelected && <span className="text-green-500 text-xl">✅</span>}
                  {isWrong && <span className="text-red-500 text-xl">❌</span>}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {resultado && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-6 ${
            resultado === "correto" 
              ? "bg-green-900/30 border border-green-500" 
              : "bg-red-900/30 border border-red-500"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            {resultado === "correto" ? (
              <>
                <span className="text-2xl">🎯</span>
                <p className="text-lg font-bold text-green-500">Correto! +10 pontos</p>
              </>
            ) : (
              <>
                <span className="text-2xl">💡</span>
                <p className="text-lg font-bold text-red-500">Resposta incorreta</p>
              </>
            )}
          </div>
          
          {mostrarExplicacao && (
            <>
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-bold">Resposta correta:</span> {atual.resposta}
              </p>
              <p className="text-sm text-gray-300">
                {atual.explicacao}
              </p>
            </>
          )}
        </motion.div>
      )}

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-[#222] p-3 rounded text-center">
          <p className="text-2xl font-bold text-[#00E5FF]">{perguntas.length}</p>
          <p className="text-xs text-gray-400">Total Perguntas</p>
        </div>
        <div className="bg-[#222] p-3 rounded text-center">
          <p className="text-2xl font-bold text-[#00FF88]">{respostasCorretas}</p>
          <p className="text-xs text-gray-400">Acertos</p>
        </div>
        <div className="bg-[#222] p-3 rounded text-center">
          <p className="text-2xl font-bold text-yellow-400">
            {perguntas.length > 0 ? Math.round((respostasCorretas / perguntas.length) * 100) : 0}%
          </p>
          <p className="text-xs text-gray-400">Taxa de Acerto</p>
        </div>
        <div className="bg-[#222] p-3 rounded text-center">
          <p className="text-2xl font-bold text-[#FF00FF]">{pontuacao}</p>
          <p className="text-xs text-gray-400">Pontos</p>
        </div>
      </div>

      {/* Navegação */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          Dica: Conhecer os tipos de ataques ajuda na prevenção
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={pularPergunta}
            className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
          >
            ⏭️ Pular Pergunta
          </button>
          
          <button
            onClick={() => setIndex((prev) => (prev + 1) % perguntas.length)}
            className="px-4 py-2 bg-gradient-to-r from-[#FF00FF] to-[#CC00CC] text-white font-bold rounded-lg hover:opacity-90 transition-all text-sm"
            disabled={!resultado}
          >
            Próxima Pergunta →
          </button>
        </div>
      </div>
    </div>
  );
}