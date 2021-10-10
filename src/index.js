import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import schema from './graphql'
import config from './config'
import DBConnection from './database/DBConnection'

async function startApolloServer() {
    const app = express()
    app.use(cors())

    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    await server.start()
    server.applyMiddleware({ app })

    await DBConnection()

    await new Promise(resolve =>
        httpServer.listen({ port: config.port }, resolve)
    )
    console.log(
        `🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`
    )
}

startApolloServer()
