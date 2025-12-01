import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EncontrarVulnerabilidade() {
  const desafios = [
    {
      id: 1,
      titulo: "Autenticação Insegura",
      codigo: `
function login(username, password) {
  return "SELECT * FROM users WHERE user = '" + username + "' AND pass = '" + password + "'";
}
      `,
      opcoes: ["SQL Injection", "XSS (Cross-Site Scripting)", "Brute Force", "CSRF"],
      resposta: "SQL Injection",
      explicacao: "⚠️ Código vulnerável a SQL Injection. Use prepared statements para prevenir.",
    },
    {
      id: 2,
      titulo: "Reflexão de Entrada",
      codigo: `
const nome = req.query.nome;
res.send("Olá " + nome);
      `,
      opcoes: ["XSS", "DDoS", "TLS downgrade", "Ransomware"],
      resposta: "XSS",
      explicacao: "⚠️ Vulnerável a XSS. Sempre valide e sanitize entradas do usuário.",
    },
    {
      id: 3,
      titulo: "Falta de Validação CSRF",
      codigo: `
app.post("/transfer", (req, res) => {
  executarTransferencia(req.body.valor);
});
      `,
      opcoes: ["CSRF", "RAT (Remote Access Trojan)", "MITM", "Keylogger"],
      resposta: "CSRF",
      explicacao: "⚠️ Falta tokens CSRF. Implemente tokens anti-CSRF em formulários críticos.",
    },
    {
      id: 4,
      titulo: "Exposição de Dados Sensíveis",
      codigo: `
// Configuração de banco de dados
const config = {
  host: "localhost",
  user: "admin",
  password: "senha123",
  database: "clientes"
};
      `,
      opcoes: ["Exposição de Dados", "SQL Injection", "Buffer Overflow", "Zero-Day"],
      resposta: "Exposição de Dados",
      explicacao: "⚠️ Credenciais hardcoded. Use variáveis de ambiente para dados sensíveis.",
    },
    {
      id: 5,
      titulo: "CORS Mal Configurado",
      codigo: `
app.use(cors({
  origin: "*",
  methods: "*",
  allowedHeaders: "*"
}));
      `,
      opcoes: ["CORS Exploit", "XSS", "SQL Injection", "Directory Traversal"],
      resposta: "CORS Exploit",
      explicacao: "⚠️ CORS muito permissivo. Restrinja origens e métodos específicos.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);

  const atual = desafios[index];

  function responder(op) {
    if (resultado) return;
    
    const correto = op === atual.resposta;
    setResultado(correto ? "correto" : "errado");
    
    if (correto) {
      setAcertos(prev => prev + 1);
    }
    
    setMostrarExplicacao(true);
    
    setTimeout(() => {
      setResultado(null);
      setMostrarExplicacao(false);
      setIndex((prev) => (prev + 1) % desafios.length);
    }, 2500);
  }

  function pularDesafio() {
    setIndex((prev) => (prev + 1) % desafios.length);
    setResultado(null);
    setMostrarExplicacao(false);
  }

  function reiniciar() {
    setIndex(0);
    setResultado(null);
    setAcertos(0);
    setMostrarExplicacao(false);
  }

  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFF00] mb-2">Identificador de Vulnerabilidades</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Desafio {index + 1} de {desafios.length} • Acertos: 
            <span className="text-[#00FF88] font-bold ml-2">{acertos}/{desafios.length}</span>
          </p>
        </div>
        
        <button
          onClick={reiniciar}
          className="mt-4 md:mt-0 px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
        >
          🔄 Reiniciar
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-bold text-[#FFFF88] mb-2 flex items-center gap-2">
          <span className="text-red-500">⚠️</span>
          {atual.titulo}
        </h3>
        
        <div className="bg-[#0f0f0f] p-3 md:p-4 rounded-lg border-l-4 border-red-500">
          <pre className="text-xs md:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono">
            {atual.codigo}
          </pre>
          <p className="text-xs text-gray-500 mt-2">
            Linguagem: JavaScript/Node.js • Contexto: Backend Web
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {atual.opcoes.map((op) => {
          const isSelected = resultado && op === atual.resposta;
          const isWrong = resultado && op !== atual.resposta && resultado === "errado";
          
          return (
            <motion.button
              key={op}
              onClick={() => responder(op)}
              disabled={resultado}
              className={`p-3 md:p-4 rounded-lg text-left transition-all ${
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
                {isSelected && <span className="text-green-500">✅</span>}
                {isWrong && <span className="text-red-500">❌</span>}
              </div>
            </motion.button>
          );
        })}
      </div>

      {resultado && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 md:p-4 rounded-lg mb-4 ${
            resultado === "correto" 
              ? "bg-green-900/30 border border-green-500" 
              : "bg-red-900/30 border border-red-500"
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            {resultado === "correto" ? (
              <>
                <span className="text-2xl">🎉</span>
                <p className="text-lg font-bold text-green-500">Correto! Você identificou a vulnerabilidade.</p>
              </>
            ) : (
              <>
                <span className="text-2xl">💡</span>
                <p className="text-lg font-bold text-red-500">Ops! Tente novamente.</p>
              </>
            )}
          </div>
          
          {mostrarExplicacao && (
            <p className="text-sm text-gray-300 mt-2">
              {atual.explicacao}
            </p>
          )}
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          Dica: Analise o código procurando por entradas não validadas ou configurações inseguras
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={pularDesafio}
            className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg transition-colors text-sm"
          >
            ⏭️ Pular Desafio
          </button>
          
          <button
            onClick={() => setIndex((prev) => (prev + 1) % desafios.length)}
            className="px-4 py-2 bg-[#444] hover:bg-[#555] rounded-lg transition-colors text-sm"
            disabled={!resultado}
          >
            Próximo →
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
        {desafios.map((d, i) => (
          <div 
            key={d.id}
            className={`h-2 rounded ${
              i < index 
                ? "bg-green-500" 
                : i === index 
                ? "bg-yellow-500" 
                : "bg-gray-700"
            }`}
            title={`Desafio ${i + 1}: ${d.titulo}`}
          />
        ))}
      </div>
    </div>
  );
}