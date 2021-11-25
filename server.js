const exp = require('constants')
let express = require('express')
let ejs = require('ejs');
let app = express()
let port = 3000
const path  = require("path")
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname,"public")))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Variável que controla a exibicão do menu de um usuário logado
let login = true;

/*Rotas */
app.get('/', (req, res) => {
  	//res.sendFile(__dirname + "/index.html");
	res.render(__dirname + "/index.html", {isLogged: login});/*Usando EJS para passar algum valor para o lado do cliente*/
})

app.post('/', (req, res) => {

	if(req.body.login === "admin" && req.body.senha === "123"){
		login = true;
		res.render(__dirname + "/index.html", {isLogged: login});/*Usando EJS para passar algum valor para o lado do cliente*/
	}else{
		res.render(__dirname + "/login.html", {isLogged: login});/*Usando EJS para passar algum valor para o lado do cliente*/
	}
	console.log(req.body.login)
})

app.get('/socio1', (req, res) => {
	res.sendFile(__dirname + "/socio1.html");
})

app.get('/socio2', (req, res) => {
	res.sendFile(__dirname + "/socio2.html");
})

app.get('/contato', (req, res) => {
	res.sendFile(__dirname + "/contatos.html");
})

app.get('/login', (req, res) => {
	//res.sendFile(__dirname + "/contatos.html");
	res.render(__dirname + "/login.html", {name: "AS"});
})

app.post('/login', (req, res) => {
	res.sendFile(__dirname + "/contatos.html");
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})

