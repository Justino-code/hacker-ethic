# 🛡️ Hacker Ethic – Plataforma Educativa de Cibersegurança

Projeto desenvolvido no âmbito da unidade curricular **Tecnologias de Multimédia (TMM)**.

O **Hacker Ethic** é uma plataforma web educativa que tem como objetivo disseminar conhecimento sobre cibersegurança através de uma interface moderna, acessível e visualmente atrativa. A plataforma combina conteúdos teóricos rigorosos com recursos multimédia interativos, proporcionando uma experiência de aprendizagem envolvente sobre segurança digital.

---

## Capturas

![Capturas](docs/capturas.md)

---

## 🎯 Objetivos do Projeto

- **Desenvolver uma plataforma educativa** completa sobre cibersegurança utilizando tecnologias web modernas
- **Implementar uma interface intuitiva** que facilite o acesso e compreensão de conteúdos técnicos
- **Criar materiais educativos** atualizados sobre tópicos fundamentais de segurança digital
- **Integrar elementos multimédia** (vídeos, gráficos, animações) para enriquecer a experiência de aprendizagem
- **Garantir responsividade completa** para diferentes dispositivos e contextos de uso
- **Estabelecer uma identidade visual coerente** que reflete o tema de cibersegurança
- **Fornecer recursos complementares** atualizados com referências a 2025

---

## ✨ Funcionalidades Principais

### 📚 Biblioteca de Artigos Educativos
Quatro artigos especializados desenvolvidos com conteúdo atualizado:

#### 1. **Introdução à Cibersegurança**
   - Conceitos fundamentais (tríade CIA)
   - Princípios básicos de proteção digital
   - Práticas essenciais para utilizadores

#### 2. **Técnicas de Hacking Ético**
   - Metodologias de penetration testing
   - Ferramentas profissionais (Nmap, Metasploit, Wireshark)
   - Framework legal e ético

#### 3. **Segurança de Redes**
   - Arquiteturas de proteção e firewalls
   - Tecnologias de VPN e segmentação
   - Monitoramento e análise de tráfego

#### 4. **Programação Segura**
   - Vulnerabilidades comuns (SQL Injection, XSS, CSRF)
   - Boas práticas de desenvolvimento
   - Validação e sanitização de dados

**Características dos artigos:**
- Conteúdo estruturado em seções lógicas
- Design temático com gradientes neon
- Links para recursos externos atualizados
- Layout responsivo otimizado
- Animações suaves de transição

### 🎥 Plataforma de Vídeos Educativos
Sistema integrado de vídeos selecionados:

- **12 vídeos educativos** categorizados por dificuldade
- **Filtros avançados** por idioma e nível de conhecimento
- **Metadados completos** (duração, canal, descrição)
- **Integração direta** com YouTube API
- **Thumbnails otimizadas** com fallback
- **Sistema de recomendações** baseado em progressão

### 🎨 Interface do Utilizador
- **Design moderno** com tema dark e acentos neon
- **Navegação intuitiva** com menu lateral fixo
- **Sistema de busca** em tempo real
- **Filtros categorizados** para conteúdo
- **Animações fluidas** com Framer Motion
- **Feedback visual** em todas as interações

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js 18+** – Framework principal
- **Vite** – Build tool e servidor de desenvolvimento
- **TailwindCSS** – Framework CSS utilitário
- **Framer Motion** – Biblioteca de animações
- **React Router** – Sistema de navegação
- **React Icons** – Coleção de ícones

### Linguagens
- **JavaScript ES6+**
- **JSX** – Sintaxe React
- **CSS3** com Tailwind

### Ferramentas de Desenvolvimento
- **Node.js** – Ambiente de execução
- **npm/yarn** – Gestor de pacotes
- **Git** – Controlo de versões
---

## 📁 Estrutura do Projeto

```
src/
├── pages/                    # Páginas principais
│   ├── Home.jsx             # Página inicial
│   ├── Artigos.jsx          # Página de artigos
│   ├── Video.jsx            # Página de vídeos
│   └── Sobre.jsx            # Página informativa
│
├── components/              # Componentes reutilizáveis
│   ├── artigos/            # Componentes de artigos especializados
│   │   ├── IntroducaoCiberSeguranca.jsx
│   │   ├── TecnicasHackingEtico.jsx
│   │   ├── SegurancaRedes.jsx
│   │   └── ProgramacaoSegura.jsx
│   ├── Header.jsx          # Cabeçalho da aplicação
│   ├── Footer.jsx          # Rodapé da aplicação
│   └── Layout.jsx          # Layout principal
│
├── assets/                 # Recursos estáticos
│   ├── images/            # Imagens e gráficos
│   └── styles/            # Estilos globais
│
├── App.jsx                # Componente raiz
├── main.jsx               # Ponto de entrada
└── index.css              # Estilos globais
```

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passos de Instalação

1. **Clonar o repositório**
```bash
git clone https://github.com/Justino-code/hacker-ethic.git
cd hacker-ethic
```

2. **Instalar dependências**
```bash
npm install
```

3. **Executar em modo de desenvolvimento**
```bash
npm run dev
```

4. **Abrir no navegador**
```
http://localhost:5173
```

### Construção para Produção
```bash
npm run build
```

### Visualizar Build de Produção
```bash
npm run preview
```

---

## 📊 Recursos Educativos Incluídos

### Links para Plataformas de Aprendizagem (2025)
- **TryHackMe** – Laboratórios interativos
- **OWASP** – Padrões de segurança web
- **Acronis Blog** – Artigos técnicos atualizados
- **CNSI 2025** – Conferência de segurança informática
- **HackerOne** – Tendências em cibersegurança

### Vídeos Selecionados
- Conteúdo em **Português** e **Inglês**
- Legendas disponíveis
- Duração variada (30min - 3h)
- Canais especializados reconhecidos

---

## 📋 Testes e Qualidade

### Testes Realizados
1. **Testes Funcionais**
   - Navegação entre páginas
   - Renderização de conteúdo
   - Interatividade dos componentes

2. **Testes de Responsividade**
   - Dispositivos móveis e tablets
   - Diferentes orientações
   - Vários navegadores

3. **Testes de Performance**
   - Tempo de carregamento
   - Uso de memória
   - Responsividade a interações

### Resultados
- **Performance:** Carregamento < 2s
- **Compatibilidade:** Chrome, Firefox, Safari, Edge
- **Responsividade:** Funcional em todos os dispositivos testados

---

## 🔗 Referências e Recursos

### Plataformas Educativas
- [TryHackMe](https://tryhackme.com) – Plataforma de aprendizado em cibersegurança
- [OWASP](https://owasp.org) – Projeto de segurança de aplicações web
- [HackerOne](https://hackerone.com) – Comunidade de hackers éticos
- [Acronis Blog](https://www.acronis.com/pt/blog/) – Artigos técnicos de segurança

### Documentação Técnica
- [React Documentation](https://react.dev) – Documentação oficial do React
- [TailwindCSS](https://tailwindcss.com) – Documentação do framework CSS
- [Vite](https://vitejs.dev) – Documentação da ferramenta de build

### Normas e Padrões
- [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) – Diretrizes de acessibilidade
- [APA 7th Edition](https://apastyle.apa.org) – Normas de citação acadêmica

---

## 👨‍💻 Autor

**Justino**  
Estudante de Tecnologias de Multimédia  
Projeto académico desenvolvido para a unidade curricular **Tecnologias de Multimédia (TMM)** – 2025

### Contacto
- Email: [email institucional]
- LinkedIn: [perfil profissional]
- GitHub: [@username]

---

## 📄 Licença e Considerações

### Licença
Este projeto é desenvolvido para **fins educacionais e académicos**. Todo o conteúdo é disponibilizado para uso educativo, com referência adequada às fontes externas.

### Considerações Éticas
- Todo o conteúdo aborda apenas **hacking ético** e **práticas legais**
- Recomenda-se utilizar conhecimentos apenas em **ambientes autorizados**
- Respeito integral pela **privacidade** e **legalidade**

### Avisos
- Alguns links externos podem tornar-se obsoletos com o tempo
- O conteúdo técnico deve ser atualizado regularmente
- Recomenda-se formação adicional para aplicação prática

---

## 🚧 Trabalho Futuro

### Melhorias Planejadas
1. **Expansão de Conteúdo**
   - Adição de novos artigos especializados
   - Desenvolvimento de tutoriais práticos
   - Inclusão de estudos de caso

2. **Funcionalidades Avançadas**
   - Sistema de progresso do utilizador
   - Certificados de conclusão
   - Fórum de discussão
   - Newsletter técnica

3. **Internacionalização**
   - Suporte a múltiplos idiomas
   - Adaptação cultural de conteúdo
   - Tradução completa da plataforma

4. **Integrações**
   - API para estatísticas de aprendizado
   - Webhooks para atualizações
   - Integração com plataformas de e-learning

---

## 🤝 Contribuições

Embora seja um projeto académico, sugestões e feedback são bem-vindos:
1. Reportar problemas através de Issues
2. Sugerir melhorias no conteúdo
3. Partilhar recursos educativos relevantes
4. Contribuir com traduções

---

*Última atualização: Dezembro 2025*  
*Versão: 1.0*  
*Status: Projeto Académico Concluído*