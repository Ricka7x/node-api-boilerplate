import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 8000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/*', (req, res) => {
  res.send({ message: 'working' })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
