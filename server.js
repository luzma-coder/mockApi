const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST' && req.url === '/auth') {
    if (req.body.email !== '' && req.body.password !== '') {
      console.log(req.body);
      res.status(200).jsonp({
        token: "ui6we.k5kjds.uiwuer"
      })
    } else {
      // res.sendStatus(400)
      res.status(400).jsonp({
        error: "Por favor, escribir email y password, ambos son necesarios."
      })
    }
  } else  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})