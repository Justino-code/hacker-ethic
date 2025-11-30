import React from "react";
import { motion } from "framer-motion";

export default function TecnicasHackingEtico() {
  return (
    <motion.div
      className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="text-center mb-8">
        <motion.h1
          className="text-4xl font-bold mb-2 text-neon-green"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Técnicas de Hacking Ético
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Métodos e práticas utilizadas por hackers éticos para testar e fortalecer
          a segurança de sistemas.
        </motion.p>
      </header>

      <section className="max-w-3xl mx-auto text-gray-300 space-y-6">
        <p>
          Hacking ético, também conhecido como penetration testing, consiste em avaliar
          a segurança de sistemas de forma legal e autorizada. O objetivo é encontrar
          vulnerabilidades antes que agentes maliciosos possam explorá-las.
        </p>
        <p>
          Técnicas comuns incluem: análise de vulnerabilidades, exploração de sistemas
          em ambiente controlado, engenharia social ética e testes de intrusão.
          Ferramentas como Nmap, Metasploit e Wireshark são frequentemente utilizadas.
        </p>
        <p>
          Um hacker ético deve sempre seguir um código de conduta rigoroso, documentar
          resultados e fornecer recomendações para fortalecer a segurança.
        </p>
      </section>

      {/* Recursos & Links */}
      <section className="mt-12 text-gray-400">
        <h3 className="text-xl font-bold text-neon-green mb-2">🔗 Recursos e Leituras Complementares</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">TryHackMe – Blog & Labs de Cibersegurança (2025)</a></li>
          <li><a href="https://www.acronis.com/pt/blog/" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">Acronis Blog – Notícias e artigos técnicos de 2025</a></li>
          <li><a href="https://hackone.com.br/blog/10-tendencias-ciberseguranca-2025/" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">HackerOne – 10 Tendências em Cibersegurança para 2025</a></li>
          <li><a href="https://cnsi.digital/" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">CNSI 2025 – Conferência Nacional de Segurança Informática (Luanda, Angola)</a></li>
          <li><a href="https://www.even3.co.ao/e/new-cybersecurity-2025-535287/" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">New Cybersecurity 2025 – Evento Online sobre Segurança Digital</a></li>
        </ul>
      </section>
    </motion.div>
  );
}
