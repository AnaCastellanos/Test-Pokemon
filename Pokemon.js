const functions = require('./functions')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.set("view engine","jade")
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.render("index")
})

app.post("/",function(req,res){

	functions.pokemon(req.body.endpoints,req.body.name).then(responses => functions.writeResponse('./pokemon['+req.body.name+']',responses)).catch(err => console.log(err))
	console.log("Consulta terminada")
})

app.listen(5000)





