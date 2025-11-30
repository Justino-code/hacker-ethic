import React, { useState } from "react";

/* ---------------------------------------------------
   Componentes de Jogos Internos
--------------------------------------------------- */

/* 🎯 1 — Adivinhe o Ataque */
function JogoAdivinheAtaque({ onExit }) {
  const perguntas = [
    {
      pergunta: "Um atacante envia milhões de requisições por segundo para derrubar um servidor. Que ataque é esse?",
      opcoes: ["SQL Injection", "Brute Force", "DDoS", "ARP Spoofing"],
      resposta: "DDoS"
    },
    {
      pergunta: "Um hacker engana o utilizador para fornecer a senha. Que ataque é esse?",
      opcoes: ["Phishing", "XSS", "CSRF", "Ransomware"],
      resposta: "Phishing"
    }
  ];

  const [index, setIndex] = useState(0);
  const [resultado, setResultado] = useState("");

  const perguntaAtual = perguntas[index];

  function selecionar(opcao) {
    if (opcao === perguntaAtual.resposta) {
      setResultado("✔ Correto!");
    } else {
      setResultado("✖ Incorreto!");
    }
  }

  function proxima() {
    if (index < perguntas.length - 1) {
      setIndex(index + 1);
      setResultado("");
    } else {
      setResultado("🎉 Parabéns! Completaste o jogo.");
    }
  }

  return (
    <div className="p-6 bg-[#0A192F] rounded-xl shadow-lg">
      <h2 className="text-3xl text-neon-cyan font-bold mb-4">Adivinhe o Ataque</h2>

      <p className="text-gray-300 mb-6">{perguntaAtual.pergunta}</p>

      {perguntaAtual.opcoes.map((op, i) => (
        <button
          key={i}
          onClick={() => selecionar(op)}
          className="block w-full my-2 px-4 py-2 bg-[#1A1A1A] rounded hover:bg-[#222] transition"
        >
          {op}
        </button>
      ))}

      <p className="mt-4 text-xl">{resultado}</p>

      {resultado && (
        <button
          onClick={proxima}
          className="mt-4 px-4 py-2 bg-neon-pink rounded hover:bg-pink-600"
        >
          Próxima Pergunta
        </button>
      )}

      <button
        onClick={onExit}
        className="mt-6 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
      >
        ← Sair do Jogo
      </button>
    </div>
  );
}

/* 🧠 2 — Quiz de Segurança Ofensiva */
function JogoQuizSeguranca({ onExit }) {
  return (
    <div className="p-6 bg-[#0A192F] rounded-xl shadow-lg">
      <h2 className="text-3xl text-neon-green font-bold mb-4">Quiz de Segurança Ofensiva</h2>

      <p className="text-gray-300 mb-4">Em breve — perguntas avançadas sobre pentest!</p>

      <button
        onClick={onExit}
        className="mt-6 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
      >
        ← Sair do Jogo
      </button>
    </div>
  );
}

/* 🛡 3 — Simulador Firewall (Drag & Drop simplificado) */
function SimuladorFirewall({ onExit }) {
  return (
    <div className="p-6 bg-[#0A192F] rounded-xl shadow-lg">
      <h2 className="text-3xl text-yellow-300 font-bold mb-4">Simulador de Firewall</h2>

      <p className="text-gray-300">(Versão simples — arraste portas para permitir/bloquear.)</p>

      <button
        onClick={onExit}
        className="mt-6 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
      >
        ← Sair do Jogo
      </button>
    </div>
  );
}

/* 🔍 4 — Identificar Vulnerabilidade no Código */
function JogoVulnerabilidades({ onExit }) {
  return (
    <div className="p-6 bg-[#0A192F] rounded-xl shadow-lg">
      <h2 className="text-3xl text-purple-400 font-bold mb-4">
        Identifique a Vulnerabilidade
      </h2>

      <p className="text-gray-300">(Em breve — escolha onde está a falha no código.)</p>

      <button
        onClick={onExit}
        className="mt-6 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
      >
        ← Sair do Jogo
      </button>
    </div>
  );
}

/* ---------------------------------------------------
   Página Principal
--------------------------------------------------- */

export default function Jogos() {
  const [jogoAtivo, setJogoAtivo] = useState(null);

  const jogosInternos = [
    { id: "ataque", nome: "Adivinhe o Ataque", componente: JogoAdivinheAtaque },
    { id: "quiz", nome: "Quiz de Segurança Ofensiva", componente: JogoQuizSeguranca },
    { id: "firewall", nome: "Simulador de Firewall", componente: SimuladorFirewall },
    { id: "vuln", nome: "Identificar Vulnerabilidade no Código", componente: JogoVulnerabilidades }
  ];

  const jogosExternos = [
    { nome: "TryHackMe (externo)", url: "https://tryhackme.com" },
    { nome: "Hack The Box (externo)", url: "https://www.hackthebox.com" },
    { nome: "PicoCTF (externo)", url: "https://picoctf.org" }
  ];

  const JogoSelecionado = jogoAtivo
    ? jogosInternos.find(j => j.id === jogoAtivo)?.componente
    : null;

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white p-6 font-mono">

      {/* MENU */}
      {!jogoAtivo && (
        <>
          <h1 className="text-4xl font-bold text-neon-cyan mb-8 text-center">
            Jogos de Cibersegurança
          </h1>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Jogos Internos */}
            <div>
              <h2 className="text-2xl mb-4 text-neon-green font-bold">Jogos Internos</h2>
              <div className="space-y-4">
                {jogosInternos.map(j => (
                  <button
                    key={j.id}
                    onClick={() => setJogoAtivo(j.id)}
                    className="block w-full bg-[#1A1A1A] p-4 rounded hover:bg-[#222] transition"
                  >
                    {j.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Jogos Externos */}
            <div>
              <h2 className="text-2xl mb-4 text-neon-pink font-bold">Jogos Externos</h2>
              <ul className="space-y-3">
                {jogosExternos.map((j, i) => (
                  <li key={i}>
                    <a
                      href={j.url}
                      target="_blank"
                      className="block bg-[#1A1A1A] p-4 rounded hover:bg-[#222] transition"
                    >
                      {j.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </>
      )}

      {/* JOGO ATIVO */}
      {jogoAtivo && (
        <div className="max-w-4xl mx-auto">
          <JogoSelecionado onExit={() => setJogoAtivo(null)} />
        </div>
      )}
    </div>
  );
}
