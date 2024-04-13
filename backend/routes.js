async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('test_collection')

  fastify.get('/', async (req, res) => {
    return {hello: 'world'}
  })

  fastify.get('/animals', async (req, res) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No documents found.')
    }
    return result
  })

  fastify.get('/animals/:animal', async (req, res) => {
    const result = await collection.findOne({animal: req.params.animal})
    if (!result) {
      throw new Error('Invalid value.')
    }
    return result
  })

  const schema = {
    body: animalBodyJsonSchema,
  }

  fastify.post('/animals', {schema}, async (req, res) => {
    const result = await collection.insertOne({animal: req.body.animal})
    return result
  })
}

export default routes;