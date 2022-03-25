import Server from "./server.js"

const server = Server.listen(3000)
server.on('listening', () => console.log(`running at ${server.address().port}`))
