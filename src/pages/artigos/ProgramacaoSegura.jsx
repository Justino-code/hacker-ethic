import React from "react";
import { motion } from "framer-motion";

export default function ProgramacaoSegura() {
  return (
    <motion.div
      className="bg-[#0D0D0D] min-h-screen text-white font-mono p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="text-center mb-8">
        <motion.h1
          className="text-4xl font-bold mb-2 text-[#FFFF00]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Programação Segura
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Boas práticas para escrever código seguro e evitar vulnerabilidades em
          aplicações.
        </motion.p>
      </header>

      <section className="max-w-3xl mx-auto text-gray-300 space-y-6">
        <p>
          Programação segura é o processo de desenvolver software protegido contra
          ataques e falhas de segurança. Inclui validação de entradas, criptografia de
          dados sensíveis, controle de acesso e tratamento de erros.
        </p>
        <p>
          Algumas vulnerabilidades comuns incluem injeção SQL, XSS (Cross-Site
          Scripting), CSRF (Cross-Site Request Forgery) e problemas de autenticação.
        </p>
        <p>
          Seguir padrões de segurança, realizar testes e auditorias regulares, além de
          manter bibliotecas atualizadas, são medidas essenciais para reduzir riscos e
          proteger usuários e sistemas.
        </p>
      </section>

      {/* Recursos & Links */}
      <section className="mt-12 text-gray-400">
        <h3 className="text-xl font-bold text-[#FFFF00] mb-2">🔗 Recursos e Leituras Complementares</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFF88] hover:underline">TryHackMe – Blog & Labs de Cibersegurança (2025)</a></li>
          <li><a href="https://www.acronis.com/pt/blog/" target="_blank" rel="noopener noreferrer" className="text-[#FFFF88] hover:underline">Acronis Blog – Notícias e artigos técnicos de 2025</a></li>
          <li><a href="https://hackone.com.br/blog/10-tendencias-ciberseguranca-2025/" target="_blank" rel="noopener noreferrer" className="text-[#FFFF88] hover:underline">HackerOne – 10 Tendências em Cibersegurança para 2025</a></li>
          <li><a href="https://cnsi.digital/" target="_blank" rel="noopener noreferrer" className="text-[#FFFF88] hover:underline">CNSI 2025 – Conferência Nacional de Segurança Informática (Luanda, Angola)</a></li>
          <li><a href="https://www.even3.co.ao/e/new-cybersecurity-2025-535287/" target="_blank" rel="noopener noreferrer" className="text-[#FFFF88] hover:underline">New Cybersecurity 2025 – Evento Online sobre Segurança Digital</a></li>
        </ul>
      </section>
    </motion.div>
  );
}
