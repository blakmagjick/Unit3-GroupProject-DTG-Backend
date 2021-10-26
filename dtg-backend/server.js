// EXTERNAL MODULES ===============================
const express = require('express')

// EXPRESS INSTANCE ===============================
const app = express()
require('dotenv').config()
// PORT ===========================================
const PORT = process.env.PORT

// INTERNAL ROUTES ================================
const routes = require('./routes')

// DB CONNECTION ==================================


// CORS //
const cors = require('cors')


const mongoose  = require('mongoose')
const mongoURI = process.env.MONGOURI
const db = mongoose.connection




// Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, ()=> {
      console.log('database connected')
  })
  
db.on('error', (err) => { console.log('ERROR: ', err) })
db.on('connected', () => { console.log('mongo connected') })
db.on('disconnected', () => { console.log('mongo disconnected')})
  
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))

// MIDDLEWARE =====================================
const whitelist = ['http://localhost:3000', 'Heroku Frontend URL HERE']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

app.use(cors(corsOptions))

// SESSION CONFIG ===========================
const session = require('express-session')
app.use(session({
        secret: "asdffjk",
        resave: false,
        saveUninitialized: false,
      }))
    
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.status(403).json({msg:"login required"})
    }
}
   

app.use(express.json())

app.get('/about', (req, res) => {
    console.log('About Route Hit')
})
// ROUTES //
app.use('/gamers', routes.gamers)
app.use('/users', routes.users)

app.listen(PORT, () => {
    console.log(`🎮 Watching you play games on port${PORT}`)
})