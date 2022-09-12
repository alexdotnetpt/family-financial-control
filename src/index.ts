import express from 'express'
const cors = require('cors');
import { AppDataSource } from './data-source'
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger.json');
AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())
    app.use(
        '/api-docs',
        swaggerUi.serve, 
        swaggerUi.setup(swaggerDocument)
      )

    app.get('/', cors(), (req, res) => {
        return res.json({msg: 'This API is working well...!'})
    })

    return app.listen(process.env.PORT_NODE)

})

