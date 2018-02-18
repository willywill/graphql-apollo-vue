import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import graphQL from 'express-graphql'
import schema from './models/schema'
import mongoStore from './models/store'
import generateFakeAPIData from './models/mocks'

const app = express()
const proc = dotenv.config()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use(mongoStore(mongoose))
app.use('/graphql', graphQL(req => ({ schema, graphiql: true })))

generateFakeAPIData(20)

app.listen(port, () => 
    console.log(`GraphQL server started on port ${port}.`))

export default app
