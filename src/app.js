import express from "express";
import databaseConnection from "./config/dbconnect.js";
import livro from "./models/Livro.js";

const connection = await databaseConnection();

connection.on("error", (err) => {
    console.error("Connection Error", err);
});

connection.once("open", () => {
    console.log("Successfull database connection")
})

const app = express();
app.use(express.json());

// Dá a responsabilidade de gerenciar e remanejar as rotas ao Express
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
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
