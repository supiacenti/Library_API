import mongoose from "mongoose";

// Schema é um objeto de configuração para o mongoose definir qual a estrutura e propriedades do documento Livro
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, {versionKey: false});

// "livros" se refere a coleção do MongoDB
const livro = mongoose.model("livros", livroSchema);

export default livro;