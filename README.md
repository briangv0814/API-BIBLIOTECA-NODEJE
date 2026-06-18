# 📚 API Biblioteca Node.js

Projeto desenvolvido para praticar conceitos de backend utilizando Node.js e Express.

## 🚀 Funcionalidades

- Listar livros
- Buscar livro por ID
- Criar livro
- Atualizar livro
- Remover livro
- Middleware de logs
- Middleware de validação
- Tratamento de erros
- Validação de dados

---

## 🛠 Tecnologias

- Node.js
- Express
- JavaScript
- Nodemon

---

## 📁 Estrutura do Projeto

```text
data/
middlewares/
routes/
index.js
```

---

## Endpoints

### Listar todos os livros

```http
GET /livros
```

### Buscar livro por ID

```http
GET /livros/:id
```

### Criar livro

```http
POST /livros
```

Exemplo:

```json
{
  "titulo": "Clean Code",
  "autor": "Robert Martin",
  "paginas": 464
}
```

### Atualizar livro

```http
PUT /livros/:id
```

### Remover livro

```http
DELETE /livros/:id
```

---

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---
## Processo de Aprendizado

Este projeto foi desenvolvido durante meus estudos de Node.js e Express.

Repositório de estudos:
https://github.com/briangv0814/Estudos-JS

## 👨‍💻 Autor

briangv0814

## Contato

LinkedIn: http://www.linkedin.com/in/brian-vilela-983974398
Email: briangvcontato@gmail.com
