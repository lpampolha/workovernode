const mongoose = require('mongoose')

//Configurando o Mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo",{
    useMongoClient:true
}).then(()=>{
    console.log('Conectado com sucesso!')
}).catch((err)=>{
    console.log('Houve um erro ao se conectar ao banco: '+err)
})

//Models
//Definindo o Model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require:true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
})

//Colletction   
mongoose.model('usuario', UsuarioSchema)

const novoUsuario = mongoose.model('usuario')

new novoUsuario({
    nome: "Lucas",
    sobrenome: "Pampolha",
    email: "lpampolhas@gmail.com",
    idade: 41,
    pais: "Brasil"
}).save().then(()=>{
    console.log("Usuário salvo com sucesso!")
}).catch((err)=>{
    console.log("Falha no registro! "+err)
})