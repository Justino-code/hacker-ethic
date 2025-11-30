# 📄 **RELATÓRIO DO PROJETO – TMM (Tecnologias de Multimédia)**

**Projeto:** CyberEthic – Plataforma Interativa sobre Cibersegurança
**Autor:** Justino
**Ano:** 2025
**Curso:** Tecnologias de Multimédia (TMM)
**Instituição:** *[inserir nome da universidade]*

---

# **1. Introdução**

O presente relatório descreve o desenvolvimento do projeto **CyberEthic**, criado no âmbito da unidade curricular **Tecnologias de Multimédia (TMM)**.
O objetivo principal foi construir uma aplicação interativa em **React**, orientada para a divulgação de conteúdos educativos sobre **cibersegurança**, recorrendo a elementos multimédia como jogos, navegação dinâmica e design atrativo.

O projeto pretende contribuir para a literacia digital, alertando o utilizador sobre ataques, boas práticas de segurança e princípios fundamentais de hacking ético.

---

# **2. Objetivos do Projeto**

Os objetivos definidos foram:

* Criar uma plataforma moderna e funcional baseada em tecnologias web.
* Disponibilizar **conteúdos teóricos** (artigos) sobre cibersegurança.
* Desenvolver **jogos educativos**, reforçando a aprendizagem através da interatividade.
* Implementar boas práticas de design multimédia e arquitetura de componentes.
* Integrar elementos visuais (tema dark + neon) coerentes com ambiente hacker.
* Explorar a utilização de **React** e **TailwindCSS** em contexto académico.

---

# **3. Tecnologias Utilizadas**

| Tecnologia            | Função                                                  |
| --------------------- | ------------------------------------------------------- |
| **React.js**          | Base principal da aplicação                             |
| **Vite**              | Ferramenta de build e servidor de desenvolvimento       |
| **JavaScript (ES6+)** | Lógica e interatividade                                 |
| **TailwindCSS**       | Estilização com classes utilitárias e design responsivo |
| **Componentes React** | Reutilização de trechos estruturais                     |
| **Assets multimédia** | Imagens, ícones, banners                                |

---

# **4. Estrutura do Sistema**

A estrutura do projeto foi organizada para ser simples e clara:

```
src/
 ├── pages/
 │    ├── Artigos.jsx
 │    ├── Jogos.jsx
 │    └── ...
 ├── artigos/
 │    ├── IntroducaoCiberseguranca.jsx
 │    ├── TecnicasHackingEtico.jsx
 │    ├── SegurancaRedes.jsx
 │    └── ProgramacaoSegura.jsx
 ├── jogos/
 │    ├── AdivinheAtaque.jsx
 │    ├── QuizSeguranca.jsx
 │    ├── SimuladorFirewall.jsx
 │    ├── EncontrarVulnerabilidade.jsx
 ├── components/
 └── assets/
```

---

# **5. Desenvolvimento da Plataforma**

## 5.1. Página de Artigos

A página **Artigos.jsx** apresenta:

* Listagem interativa dos artigos
* Componente selecionado aberto na mesma página
* Conteúdo estruturado, com imagens, texto e links externos atualizados (2025)

Cada artigo inclui:

* Introdução teórica
* Exemplos práticos
* Links para plataformas de treino (HackTheBox, TryHackMe, OWASP, etc.)

---

## 5.2. Página de Jogos

Esta secção inclui jogos educativos criados com React:

### ✔ Adivinhe o Ataque

O utilizador recebe pistas e tem de adivinhar o tipo de ataque.

### ✔ Quiz de Segurança Ofensiva

Perguntas de múltiplas escolhas sobre hacking ético.

### ✔ Simulador de Firewall (Drag & Drop)

O utilizador arrasta itens para permitir/bloquear tráfego.

### ✔ Encontre a Vulnerabilidade

Trecho de código onde o utilizador encontra e seleciona falhas.

**Implementação única:**
Todos os jogos carregam na mesma página, mantendo o menu lateral e um botão “Sair” para regressar ao menu.

---

# **6. Design Multimédia**

O design segue uma estética *cyberpunk*:

* Tema **dark** com cores **neon**
* Fontes estilo terminal (monoespaçadas)
* Elementos responsivos
* Legibilidade como prioridade
* Experiência parecida com interfaces de hacking fictícias

Foi respeitado o princípio multimédia de **coerência visual**, garantindo uniformidade entre artigos e jogos.

---

# **7. Testes e Validação**

Foram realizados:

* Testes funcionais (navegação, seleção de artigos, troca de jogos)
* Testes de responsividade em mobile e desktop
* Testes de fluidez e carregamento em Vite

Não foram encontrados erros críticos; alguns ajustes visuais foram corrigidos durante o processo.

---

# **8. Conclusão**

Este projeto permitiu:

* Consolidar conhecimentos de React e TailwindCSS
* Aplicar princípios de Multimédia (design, usabilidade, interatividade)
* Criar um produto funcional com **valor educativo real**
* Explorar a área da cibersegurança de forma simplificada e acessível

Apesar de ser um projeto académico simples, alcançou os objetivos definidos e demonstrou boa integração entre teoria, prática e elementos multimédia.

---

# **9. Trabalhos Futuros**

* Adicionar modo multiplayer aos jogos
* Criar animações sonoras e visuais mais avançadas
* Desenvolver um sistema de pontuação global
* Criar uma API para estatísticas
* Inserir vídeos interativos explicativos por tema

---

# **10. Referências (2025)**

* OWASP — [https://owasp.org](https://owasp.org)
* MITRE ATT&CK — [https://attack.mitre.org](https://attack.mitre.org)
* CSIRT Angola — [https://csirt.ao](https://csirt.ao)
* NIST Security — [https://www.nist.gov/cybersecurity](https://www.nist.gov/cybersecurity)
* TryHackMe — [https://tryhackme.com](https://tryhackme.com)
* HackTheBox — [https://hackthebox.com](https://hackthebox.com)
* CISA — [https://www.cisa.gov](https://www.cisa.gov)