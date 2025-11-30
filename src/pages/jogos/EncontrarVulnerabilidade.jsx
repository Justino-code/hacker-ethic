import React, { useState } from "react";

export default function VulnerabilidadeCodigo() {
  const desafios = [
    {
      codigo: `
function login(username, password) {
  return "SELECT * FROM users WHERE user = '" + username + "' AND pass = '" + password + "'";
}
      `,
      opcoes: ["SQL Injection", "XSS", "Brute Force", "CSRF"],
      resposta: "SQL Injection",
    },
    {
      codigo: `
const nome = req.query.nome;
res.send("Olá " + nome);
      `,
      opcoes: ["XSS", "DDOS", "TLS downgrade", "Ransomware"],
      resposta: "XSS",
    },
    {
      codigo: `
app.post("/transfer", (req, res) => {
  executarTransferencia(req.body.valor);
});
      `,
      opcoes: ["CSRF", "RAT", "MITM", "Keylogger"],
      resposta: "CSRF",
    },
  ];

  const [index, setIndex] = useState(0);
  const [resultado, setResultado] = useState(null);

  const atual = desafios[index];

  function responder(op) {
    if (op === atual.resposta) setResultado("correto");
    else setResultado("errado");

    setTimeout(() => {
      setResultado(null);
      setIndex((prev) => (prev + 1) % desafios.length);
    }, 1500);
  }

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-neon-cyan mb-6">
        Identifique a Vulnerabilidade
      </h2>

      <pre className="bg-[#0f0f0f] p-4 rounded text-sm overflow-auto mb-6">
        {atual.codigo}
      </pre>

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
        <p className="text-neon-green mt-4 text-lg">✔ Correto!</p>
      )}
      {resultado === "errado" && (
        <p className="text-neon-pink mt-4 text-lg">✘ Errado!</p>
      )}
    </div>
  );
}
