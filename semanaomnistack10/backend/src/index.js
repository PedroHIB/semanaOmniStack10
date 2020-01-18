 const express = require('express')
 const mongoose = require('mongoose')
 const routes = require('./routes')

 const app = express()
 
 mongoose.connect('mongodb://PedroHIB:senha@cluster0-shard-00-00-9fiv8.mongodb.net:27017,cluster0-shard-00-01-9fiv8.mongodb.net:27017,cluster0-shard-00-02-9fiv8.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(express.json()) //tem que vir antes das rotas
app.use(routes)

app.listen(3333)





//Metodos HTTP GET(pegar), POST(criar) , PUT(editar) , DELETE

//Tipos de Parametros:

//Query Params: request.query (Filtros, ordenacao e paginacao, ...)
//Route Params: request.params (identificar um recurso na alteracao ou remocao)
//Body: request.body( Dados para criacao ou alteracao de um registro)

//MongoDB (Nao-Relacional)
