const exp = require('constants')
let express = require('express')
let app = express()
let port = 3000
const path  = require("path")

app.use(express.static(path.join(__dirname,"public")))

/*Rotas */
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})