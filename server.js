// EXTERNAL MODULES ===============================
const express = require('express')

// EXPRESS INSTANCE ===============================
const app = express()

// PORT ==========================================
require('dotenv').config()
const PORT = process.env.PORT || 3003

// INTERNAL ROUTES ================================
const routes = require('./routes')

// DB CONNECTION ==================================
require('./config/db.connection')

// CORS //
const cors = require('cors')

// MIDDLEWARE =====================================
const whitelist = ['http://localhost:3000', 'https://dtg-downtogame.herokuapp.com']
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

// app.use(cors())
// app.options('*', cors())
app.use(cors(corsOptions))

// SESSION CONFIG ===========================
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session)

// For local use
app.use(session({
    secret: "asdffjk",
    resave: false,
    saveUninitialized: false,
  }))

// For deployment
// app.set('trust proxy', 1)
// app.use(session({
//     secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: false,
//         store: new MongoDBStore({
//             uri: process.env.MONGODB_URI,
//             collection: 'mySessions'
//         }),
//         cookie:{
//             sameSite: 'none',
//             secure: true
//         }
//     }))

    
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.status(403).json({msg:"login required"})
    }
}
    
app.use(express.json())
// ============================================================

app.get('/about', (req, res) => {
    console.log('About Route Hit')
})

// ROUTES //
app.use('/gamers', isAuthenticated, routes.gamers)
app.use('/users', routes.users)

app.listen(PORT, () => {
    console.log(`🎮 Watching you play games on port: ${PORT}`)
})