// const fastify = require('fastify')({logger: true})

// // Declare routes
// fastify.get('/', (req, res) => {
//   res.send({ hello: 'world'})
// })
// fastify.register(require('./routes'))

// // Run Server
// fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// })

import { Fastify } from "fastify";
import { dbConnector } from "./db-connector";
import { routes } from "./routes";

const fastify = Fastify({
  logger: true
})

fastify.register(dbConnector)
fastify.register(routes)

fastify.listen({ port: 3000, host: '0.0.0.0'}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})