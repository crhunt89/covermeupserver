const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(
      createSuccess = (user) => {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
        res.json({
          user: user,
          message: 'user created',
          sessionToken: token
        })
      },
      createError = err => res.send(500, err)
    )
})
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, matches) => {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
            res.json({
              user: user,
              message: 'successfully authenticated user',
              sessionToken: token
            })
          } else {
            res.status(502).send({ error: 'bad gateway' })
          }
        })
      } else {
        res.status(500).send({ error: 'You failed at logging in' })
      }
    })
})

module.exports = router;