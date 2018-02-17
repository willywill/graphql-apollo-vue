import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import graphQL from 'express-graphql'

const app = express()
const proc = dotenv.config()
const port = process.env.PORT

app.listen(port, () => 
    console.log(`GraphQL server started on port ${port}.`))

export default app

