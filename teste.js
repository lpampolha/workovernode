const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','ju071005', {
    host:'localhost',
    dialect:'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('Autenticado!')
// }).catch((erro)=>{
//     console.log('Falha na autenticação: '+erro)
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type:Sequelize.STRING

    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Testando o Sequelize',
    conteudo: 'Curso Show!'
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Lucas',
    sobrenome: 'Pampolha',
    idade: 41,
    email:'lpampolhas@gmail.com'
})
// Postagem.sync({force:true})
// Usuario.sync({force:true})

