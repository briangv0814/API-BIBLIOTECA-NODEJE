function validarLivro(req, res, next) {
    const { titulo, autor, paginas} = req.body

    if(!titulo) {
        return res.status(400).json({
            erro: "Título do livro obrigatório!"
        })
    }

    if(!autor) {
        return res.status(400).json({
            erro: "Autor do livro obrigatório!"
        })
    }

    if(!paginas) {
        return res.status(400).json({
            erro: "Número de páginas do livro obrigatório!"
        })
    }

    if(!Number.isInteger(paginas) || paginas <= 0) {
        return res.status(400).json({
            erro: "Número invalido de páginas!"
        })
    }

    if(titulo.length < 3) {
        return res.status(400).json({
            erro: "Título deve possuir pelo menos 3 caracteres!"
        })
    }

    if(autor.length < 3) {
        return res.status(400).json({
            erro: "Autor deve possuir pelo menos 3 caracteres!"
        })
    }

    next()
    
}

module.exports = validarLivro