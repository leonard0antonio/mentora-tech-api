# 📌 Mentora Tech API

![GitHub repo size](https://img.shields.io/github/repo-size/leonard0antonio/mentora-tech-api?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/leonard0antonio/mentora-tech-api?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/leonard0antonio/mentora-tech-api?style=for-the-badge)
![GitHub open issues](https://img.shields.io/github/issues/leonard0antonio/mentora-tech-api?style=for-the-badge)
![GitHub open pull requests](https://img.shields.io/github/issues-pr/leonard0antonio/mentora-tech-api?style=for-the-badge)

> A Mentora Tech API é o backend responsável por gerenciar uma plataforma de mentoria, conectando alunos a mentores da área de tecnologia. O projeto gerencia usuários, perfis e autenticação para facilitar o ecossistema de aprendizado.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `Node.js`.
* Você tem uma máquina `Windows / Linux / Mac`.
* Você tem acesso a um banco de dados `PostgreSQL` (recomenda-se o uso do Docker para rodar o banco localmente).

## 🚀 Instalando o Mentora Tech API

Para instalar e configurar o ambiente de desenvolvimento local, siga estas etapas:

**Linux, macOS e Windows:**
```bash
# Clone o repositório
git clone [https://github.com/leonard0antonio/mentora-tech-api.git](https://github.com/leonard0antonio/mentora-tech-api.git)

# Acesse a pasta do projeto
cd mentora-tech-api

# Instale as dependências
npm install

# Crie um arquivo .env na raiz do projeto com suas variáveis de ambiente (ex: DATABASE_URL)
# Execute as migrações do banco de dados (caso esteja utilizando Prisma)
npx prisma migrate dev

```

## ☕ Usando o Mentora Tech API

Para executar a aplicação em ambiente de desenvolvimento, rode o seguinte comando:

```bash
npm run dev

```

> **Nota:** A API estará rodando em `http://localhost:3000` (ou na porta definida no seu `.env`).

### 🔑 Credenciais Padrão de Teste

Para facilitar os testes da aplicação, o banco de dados pode ser populado (via seed) com os seguintes usuários de teste:

* **Perfil Mentor:**
* **E-mail:** `joao.Mentor1@teste.com`
* **Senha:** `senha123`


* **Perfil Aluno:**
* **E-mail:** `joao.aluno1@teste.com`
* **Senha:** `senha123`

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

## 📝 Licença

Esse projeto está sob a licença `MIT`. Veja o arquivo LICENSE para mais detalhes.
