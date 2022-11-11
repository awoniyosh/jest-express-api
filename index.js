// const express = require('express')
// const app = express()
// const router = express.Router()
 
// router.get('/', (req, res) => {
//   if (req.query.id) {
//     return res.status(200).send(`Hi! ${req.query.id}`)
//   }
 
//   res.status(400).send('Who are you?')
// })
 
// app.use('/', router)
 
// app.listen(3000)


const express = require('express')
const app = express()
const router = express.Router()
const { Get } = require('./root')
 
router.get('/', Get)
 
app.use('/', router)
 
app.listen(3000)