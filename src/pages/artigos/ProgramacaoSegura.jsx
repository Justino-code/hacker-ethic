import React from "react";
import { motion } from "framer-motion";

export default function ProgramacaoSegura() {
  const vulnerabilidades = [
    "Injeção SQL",
    "XSS (Cross-Site Scripting)",
    "CSRF (Cross-Site Request Forgery)",
    "Problemas de Autenticação",
    "Exposição de Dados Sensíveis",
    "Configurações de Segurança Incorretas"
  ];

  const recursos = [
    { 
      nome: "TryHackMe", 
      url: "https://tryhackme.com", 
      desc: "Blog & Labs de Cibersegurança (2025)" 
    },
    { 
      nome: "Acronis Blog", 
      url: "https://www.acronis.com/pt/blog/", 
      desc: "Notícias e artigos técnicos de 2025" 
    },
    { 
      nome: "HackerOne", 
      url: "https://hackone.com.br/blog/10-tendencias-ciberseguranca-2025/", 
      desc: "10 Tendências em Cibersegurança para 2025" 
    },
    { 
      nome: "CNSI 2025", 
      url: "https://cnsi.digital/", 
      desc: "Conferência Nacional de Segurança Informática (Luanda, Angola)" 
    },
    { 
      nome: "New Cybersecurity 2025", 
      url: "https://www.even3.co.ao/e/new-cybersecurity-2025-535287/", 
      desc: "Evento Online sobre Segurança Digital" 
    },
  ];

  return (
    <motion.div
      className="bg-[#0D0D0D] min-h-screen text-white font-mono p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#FFFF00]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Programação Segura
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Boas práticas para escrever código seguro e evitar vulnerabilidades em
          aplicações.
        </motion.p>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-4xl mx-auto">
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 mb-8 shadow-lg border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-[#0D0D0D] p-4 rounded-lg border-l-4 border-[#FFFF00]">
                <h3 className="font-bold text-[#FFFF00] mb-2">📝 O que é Programação Segura?</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  É o processo de desenvolver software protegido contra ataques e falhas de segurança. 
                  Inclui validação de entradas, criptografia de dados sensíveis, controle de acesso 
                  rigoroso e tratamento adequado de erros.
                </p>
              </div>
              
              <div className="bg-[#0D0D0D] p-4 rounded-lg border-l-4 border-[#FFFF00]">
                <h3 className="font-bold text-[#FFFF00] mb-2">🛡️ Medidas Essenciais</h3>
                <ul className="text-gray-300 text-sm md:text-base space-y-1 list-disc ml-4">
                  <li>Seguir padrões de segurança (OWASP, CERT)</li>
                  <li>Realizar testes e auditorias regulares</li>
                  <li>Manter bibliotecas e dependências atualizadas</li>
                  <li>Implementar autenticação multifator</li>
                  <li>Utilizar HTTPS e criptografia</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-[#0D0D0D] p-4 rounded-lg">
                <h3 className="font-bold text-[#FFFF00] mb-3">⚠️ Vulnerabilidades Comuns</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vulnerabilidades.map((vuln, index) => (
                    <div 
                      key={index}
                      className="bg-[#1A1A1A] p-2 rounded text-sm flex items-center gap-2"
                    >
                      <span className="text-[#FFFF00]">•</span>
                      <span className="text-gray-300">{vuln}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0D0D0D] p-4 rounded-lg">
                <p className="text-gray-300 text-sm md:text-base">
                  <strong className="text-[#FFFF00]">💡 Lembrete:</strong> Seguir essas práticas reduz 
                  riscos significativamente e protege tanto usuários quanto sistemas contra ameaças 
                  cibernéticas.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recursos & Links */}
        <section className="bg-[#1A1A1A] rounded-xl p-5 md:p-8 shadow-lg border border-gray-800">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#FFFF00] flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-2xl">🔗</span>
            Recursos e Leituras Complementares
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recursos.map((recurso, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] p-4 rounded-lg border border-gray-800 hover:border-[#FFFF00] transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1A1A1A] p-2 rounded">
                      <span className="text-[#FFFF00] text-lg">📘</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#FFFF88] mb-1 group-hover:underline">
                        {recurso.nome}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {recurso.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}