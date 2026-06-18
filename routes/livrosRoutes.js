const express = require("express")
const router = express.Router()
const livros = require("../data/livros")
const validaLivro = require("../middlewares/validarLivro")

router.get("/", (req, res) => {
    return res.status(200).json(livros)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)

    if(isNaN(id)) {
        return res.status(400).json({
            erro: "ID inválido!"
        })
    }

    const livro = livros.find(livro => {
        return livro.id === id
    })

    if(!livro) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        })
    }

    return res.status(200).json(livro)
})

router.post("/", validaLivro, (req, res) => {
    const { titulo, autor, paginas} = req.body

    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor,
        paginas
    }

    livros.push(novoLivro)

    if(!novoLivro) {
        return res.json({
            erro: "Não foi possivel cadastrar o livro"
        })
    }

    return res.status(201).json({
        mensagem: "Novo livro cadastrado com sucesso!",
        livro: novoLivro
    })
})

router.put("/:id", validaLivro, (req, res) => {
    const id = Number(req.params.id)

    if(isNaN(id)) {
        return res.status(400).json({
            erro: "ID inválido!"
        })
    }

    const { titulo, autor, paginas} = req.body

    const indice = livros.findIndex(livro => {
        return livro.id === id
    })

    if(indice === -1) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        })
    }

    livros[indice] = {
        id,
        titulo,
        autor,
        paginas
    }

    return res.status(200).json({
        mensagem: "Livro atualizado com sucesso!",
        livro: livros[indice]
    })
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)

    if(isNaN(id)) {
        return res.status(400).json({
            erro: "ID inválido!"
        })
    }

    const indice = livros.findIndex(livro => {
        return livro.id === id
    })

    if(indice === -1) {
        return res.status(404).json({
            erro: "Livro não encontrado"
        })
    }

    livros.splice(indice, 1)

    return res.status(200).json({
        mensagem: "Livro removido com sucesso!"
    })
})

module.exports = router