import React, { useState } from "react";

export default function JogoQuizSeguranca() {
  const perguntas = [
    {
      pergunta: "Qual ferramenta é normalmente usada para escanear portas e serviços em um host?",
      opcoes: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
      resposta: "Nmap",
      info: "Nmap é amplamente usado para descoberta de rede e varredura de portas."
    },
    {
      pergunta: "Qual é a vulnerabilidade que permite inserir scripts maliciosos em páginas web?",
      opcoes: ["XSS", "SQLi", "CSRF", "Clickjacking"],
      resposta: "XSS",
      info: "XSS (Cross-Site Scripting) permite a execução de scripts no contexto do navegador da vítima."
    },
    {
      pergunta: "O que significa 'privilege escalation'?",
      opcoes: [
        "Elevar a prioridade do sistema",
        "Obter permissões mais altas no sistema",
        "Desativar privilégio de um usuário",
        "Escalonar tráfego de rede"
      ],
      resposta: "Obter permissões mais altas no sistema",
      info: "Privilege escalation é obter permissões superiores (ex.: de user para root)."
    },
    {
      pergunta: "Qual ataque explora consultas de banco de dados mal construídas?",
      opcoes: ["XSS", "SQL Injection", "DoS", "ARP Spoofing"],
      resposta: "SQL Injection",
      info: "SQLi permite manipular consultas SQL se entradas não forem corretamente tratadas."
    },
    {
      pergunta: "Qual técnica é usada para interceptar e analisar pacotes de rede em tempo real?",
      opcoes: ["Brute Force", "Sniffing", "Spoofing", "Phishing"],
      resposta: "Sniffing",
      info: "Packet sniffing captura tráfego de rede para análise (ex.: Wireshark)."
    },
    {
      pergunta: "O que é um 'CSRF'?",
      opcoes: [
        "Um tipo de malware",
        "Ataque que força ação do utilizador autenticado",
        "Uma técnica de criptografia",
        "Uma falha de rede"
      ],
      resposta: "Ataque que força ação do utilizador autenticado",
      info: "CSRF (Cross-Site Request Forgery) força ações a partir de um usuário autentificado."
    }
  ];

  const [index, setIndex] = useState(0);
  const [selecionada, setSelecionada] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const atual = perguntas[index];

  function escolher(op) {
    if (selecionada) return; // impede múltiplas escolhas
    setSelecionada(op);
    if (op === atual.resposta) {
      setFeedback("✔ Correto!");
      setScore((s) => s + 1);
    } else {
      setFeedback(`✘ Errado — resposta correta: ${atual.resposta}`);
    }

    // avança automaticamente após 1.4s (ou permite clicar Próxima)
    setTimeout(() => {
      if (index < perguntas.length - 1) {
        setIndex((i) => i + 1);
        setSelecionada(null);
        setFeedback("");
      } else {
        setFinalizado(true);
      }
    }, 1400);
  }

  function reiniciar() {
    setIndex(0);
    setSelecionada(null);
    setFeedback("");
    setScore(0);
    setFinalizado(false);
  }

  const progressoPercent = Math.round(((index) / perguntas.length) * 100);

  if (finalizado) {
    return (
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-neon-green mb-4">Quiz de Segurança Ofensiva</h2>
        <p className="text-gray-300 mb-4">Resultado final:</p>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-neon-cyan">{score} / {perguntas.length}</p>
          <p className="text-gray-400 mt-2">
            {(score / perguntas.length) >= 0.8 ? "Excelente — bom entendimento!" :
              (score / perguntas.length) >= 0.5 ? "Bom — revise alguns tópicos." : "Recomenda-se estudar mais."}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reiniciar}
            className="px-4 py-2 bg-neon-pink rounded hover:bg-pink-600 transition"
          >
            Reiniciar Quiz
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-[#333] rounded hover:bg-[#444] transition"
          >
            Voltar ao Topo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-neon-green mb-4">Quiz de Segurança Ofensiva</h2>

      <div className="mb-4">
        <div className="text-sm text-gray-400">Progresso</div>
        <div className="w-full h-2 bg-[#0f0f0f] rounded mt-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-green"
            style={{ width: `${(index / perguntas.length) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">{index + 1} / {perguntas.length}</div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-200 mb-3">{atual.pergunta}</p>

        <div className="grid gap-3">
          {atual.opcoes.map((op) => {
            const isSelected = selecionada === op;
            const correct = op === atual.resposta;
            const btnClasses = [
              "p-3 rounded text-left",
              isSelected ? (correct ? "bg-neon-green text-black" : "bg-neon-pink text-white") : "bg-[#222] hover:bg-[#2b2b2b]"
            ].join(" ");

            return (
              <button
                key={op}
                onClick={() => escolher(op)}
                className={btnClasses}
                disabled={!!selecionada}
              >
                {op}
              </button>
            );
          })}
        </div>
      </div>

      {feedback && (
        <div className="mb-4">
          <p className="text-sm">{feedback}</p>
          {atual.info && <p className="text-xs text-gray-400 mt-1">{atual.info}</p>}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">Pontuação: <span className="text-neon-cyan font-bold">{score}</span></div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (index < perguntas.length - 1) {
                setIndex((i) => i + 1);
                setSelecionada(null);
                setFeedback("");
              } else {
                setFinalizado(true);
              }
            }}
            className="px-3 py-2 bg-[#333] rounded hover:bg-[#444] transition"
          >
            Próxima
          </button>

          <button
            onClick={reiniciar}
            className="px-3 py-2 bg-neon-pink rounded hover:bg-pink-600 transition"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
