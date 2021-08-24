const express = require('express')
const api = express()
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
    //Template Engine

    api.engine('handlebars', handlebars({defaultLayout: 'main'}))
    api.set('view engine', 'handlebars')

    //Body Parser
    api.use(bodyParser.urlencoded({extended:false}))
    api.use(bodyParser.json())


api.get('/',(req,res)=>{
    Post.findAll({order: [['id', 'DESC']]}).then((posts)=>{
        console.log(posts)
        res.render('home', {
            // posts:posts
            posts: posts.map(posts => posts.toJSON())
        })
    })    
})

api.get('/cad',(req,res)=>{
    // res.send('ROTA DE CADASTRO DE POSTS')
    res.render('form')
})

api.post('/add',(req,res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Houve um erro'+erro)
    })
    // req.body.conteudo
    // res.send('Texto: '+req.body.titulo+" Conteudo: "+req.body.conteudo)
})
// api.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/html/index.html')
// })

// api.get('/teste',(req,res)=>{
//     res.send('Rota de Teste')
// })

// api.get('/ola/:nome', (req,res)=>{
//     res.send(req.params)
// })

api.get('/deletar/:id',(req,res)=>{
    Post.destroy({where: {'id': req.params.id}}).then(()=>{
        res.send('Postagem deletada com sucesso!')
    }).catch((error)=>{
        res.send('Esta postagem não existe!: '+error)
    })
})

api.listen(3001,(req,res)=>{
    console.log('Server OK!')
})