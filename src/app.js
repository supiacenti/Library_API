import express from "express";

const app = express();

// executar em todas as requisições com body compatível com JSON, para que seja parseado JSON, já que todas vem em formato string
app.use(express.json()); //middleware, para que tenha acesso as requisições e respostas quando estão sendo feitas para que sejam feitas alterações nelas

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

// Dá a responsabilidade de gerenciar e remanejar as rotas ao Express
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.") //201 é CREATED
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.");
});

export default app;

//mongodb+srv://suellen:290102@library.llzqb6v.mongodb.net/?retryWrites=true&w=majority&appName=library