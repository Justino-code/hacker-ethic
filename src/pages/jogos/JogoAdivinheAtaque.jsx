import React, { useState } from "react";

export default function JogoAdivinheAtaque() {
  const perguntas = [
    {
      pergunta: "Um ataque onde o invasor tenta adivinhar senhas repetidamente é chamado de:",
      opcoes: ["Phishing", "Brute Force", "MITM", "SQL Injection"],
      resposta: "Brute Force",
    },
    {
      pergunta: "Um e-mail falso tentando roubar credenciais é chamado de:",
      opcoes: ["Phishing", "DDoS", "Ransomware", "Backdoor"],
      resposta: "Phishing",
    },
    {
      pergunta: "Um ataque que intercepta comunicação entre duas partes é:",
      opcoes: ["MITM", "XSS", "Trojan", "Sniffing"],
      resposta: "MITM",
    },
    {
      pergunta: "Código malicioso injetado em páginas web é típico de:",
      opcoes: ["XSS", "Ransomware", "Spoofing", "Botnet"],
      resposta: "XSS",
    },
  ];

  const [index, setIndex] = useState(0);
  const [resultado, setResultado] = useState(null);

  const atual = perguntas[index];

  function responder(opcao) {
    if (opcao === atual.resposta) {
      setResultado("correto");
    } else {
      setResultado("errado");
    }

    setTimeout(() => {
      setResultado(null);
      setIndex((prev) => (prev + 1) % perguntas.length);
    }, 1200);
  }

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-neon-cyan mb-6">Adivinhe o Ataque</h2>

      <h3 className="text-xl mb-4">{atual.pergunta}</h3>

      <div className="grid gap-4">
        {atual.opcoes.map((op) => (
          <button
            key={op}
            onClick={() => responder(op)}
            className="p-3 bg-[#222] rounded hover:bg-[#333] transition"
          >
            {op}
          </button>
        ))}
      </div>

      {resultado === "correto" && (
        <p className="text-neon-green mt-4">✔ Resposta correta!</p>
      )}
      {resultado === "errado" && (
        <p className="text-neon-pink mt-4">✘ Resposta errada!</p>
      )}
    </div>
  );
}
