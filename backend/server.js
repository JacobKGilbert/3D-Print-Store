const fastify = require('fastify')({logger: true})

// Declare routes
fastify.get('/', function handler (req, res) {
  res.send({ hello: 'world'})
})

// Run Server
fastify.listen({port:3000}, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})