const db = require('../models');
const bcrypt = require('bcrypt')

// index
const index = (req, res) => {
  db.User.find({}, (error, user) => {
      if (error) return res.status(400).json({error: error.message})

      return res.status(200).json(user)
  })
}


// POST -- sign up
const signup = (req, res) => {
  // hash + salt password
  // res.send('signup route working')
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

  db.User.create(req.body, (error, createdUser) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      console.log('👽 signup successful! 👽')
      res.status(201).json(createdUser)
    }
  })

};

// GET -- log in
const login = (req, res) => {

  db.User.findOne({ username: req.body.username }, (error, foundUser) => {
    if(error) {
      res.send(error) 
    } else {
      if(foundUser) {
        if (bcrypt.compareSync(req.body.password, foundUser.password)){
          // logs in user and creates session
          req.session.currentUser = foundUser
          console.log('👾 login successful! 👾')
          res.status(200).json(foundUser)
        } else {
          res.status(400).json({ error: error })
        }
      }
    }
  })

}

// DELETE -- session
const logout = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ msg: '👻 user logged out 👻'})
  })
}

module.exports = {
    index,
    signup,
    login,
    logout, 
}