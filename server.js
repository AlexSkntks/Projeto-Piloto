const exp = require('constants')
let express = require('express')
let ejs = require('ejs');
let app = express()
let port = 3000
const path  = require("path")
const bodyParser = require('body-parser')
let things = require(__dirname + "/Clientes.js")

app.use(express.static(path.join(__dirname,"public")))

app.engine('html', require('ejs').renderFile);//permite enviar dados do Back-end para o front-end (EJS)

app.set('view engine', 'html');
app.set('views', __dirname);

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* Cadastro de usuários*/
function Cliente(nome, email, senha, carteira) {
	this.nome = nome;
	this.email = email;
	this.senha = senha;
	this.carteira = carteira //Nome do arquivo com a carteira de investimentos
	this.imprime = function (){
		console.log(this.nome);
	}
}

function Cadastros(){
	this.vet = [];
	this.insereUsuario = function(cliente){
		this.vet.push(cliente);
	}
	this.BuscaUsuario = function (nome, senha){
		for(let i = 0; i < this.vet.length; i++){
			if(this.vet[i].email === nome && this.vet[i].senha === senha){
				return true;
			}
		}
		return false;
	}
	this.imprimeUsers = function(){
		for(let i = 0; i < this.vet.length; i++){
			console.log(this.vet[i].nome);
		}
	}
}

//Variável com os cadastros
let usuarios = new Cadastros();

//Variável que controla a exibicão do menu de um usuário logado
let login = false;

/*Rotas */
app.get('/', (req, res) => {
  	//res.sendFile(__dirname + "/index.html");
	res.render(__dirname + "/index.html", {isLogged: login});/*Usando EJS para passar algum valor para o lado do front-end*/
})

app.get('/socio1', (req, res) => {
	res.render(__dirname + "/socio1.html", {isLogged: login});
})

app.get('/socio2', (req, res) => {
	res.render(__dirname + "/socio2.html", {isLogged: login});
})

app.get('/contato', (req, res) => {
	res.render(__dirname + "/contatos.html", {isLogged: login});
})

app.get('/login', (req, res) => {
	//res.sendFile(__dirname + "/contatos.html");
	res.render(__dirname + "/login.html", {isLogged: login});
})

app.post('/', (req, res) => {
	
	if(req.body.sair === "5"){
		login = false;
		res.render(__dirname + "/index.html", {isLogged: login});
	}
	res.render(__dirname + "/index.html", {isLogged: login});
})

app.post('/login', (req, res) => {

	if(usuarios.BuscaUsuario(req.body.loginEmail, req.body.senha) === true){//Logar um usuário
		login = true;
		res.render(__dirname + "/index.html", {isLogged: login});
	}else if(req.body.nome !== undefined && req.body.senhaNovoCadastro !== undefined){//Efetuar novo cadastro
		let user = new Cliente(req.body.nome, req.body.email, req.body.senhaNovoCadastro, req.body.carteira);
		usuarios.insereUsuario(user);
		login = true;
		res.render(__dirname + "/index.html", {isLogged: login});
	}else{
		res.render(__dirname + "/login.html", {isLogged: login});//Recarregar a página caso a operação não tenha sucesso
	}
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
