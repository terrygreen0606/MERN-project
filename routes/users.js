const express = require('express')
const router = express.Router()
// const cors = require('cors')

const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User Model
const User = require('../models/user')

// Url prefix is '/users' in server.js (app.use('/users'))
// Route /users
router.post('/register', (req, res) => {
    const {first_name, last_name, username, email, password} = req.body

    // Simply Validation
    if (!first_name || !last_name || !username || !email || !password) {
        return res.status(400).json({msg: 'Insert all info'})
    }

    // Check for existence
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({msg: 'user already exists'})
            }

            const newUser = new User({
                first_name,
                last_name,
                username,
                email,
                password
            })

            // Create Salt and hash
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash( newUser.password, salt, (err, hash) => {

                    if (err) throw err;

                    newUser.password = hash

                    newUser.save()
                        .then(user => {

                            // Send the response in jwt format. I can add any type like username or first_name or email. I only used id here.
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err

                                    res.json({
                                        token: token,
                                        user: {
                                            id: user.id,
                                            first_name: user.first_name,
                                            last_name: user.last_name,
                                            username: user.username,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
})


// users.use(cors())

// process.env.SECRET_KEY = 'secret'

// users.post('/register', (req, res) => {
//     const today = new Date()
//     const userData = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         created: today
//     }

//     User.findOne({
//         email: req.body.email
//     })
//     .then(user=>{
//         if (!user){
//             bcrypt.hash(req.body.password, 10, (err, hash) => {
//                 userData.password = hash
//                 User.create(userData)
//                 .then(user=>{
//                     res.json({status: user.email + ' registered!'})
//                 })
//                 .catch(err=>{
//                     res.send('error:' + err)
//                 })
//             })
//         } else {
//             res.json({error: 'user already exists'})
//         }
//     })
//     .catch(err=>{
//         res.send('error:' + err)
//     })
// })

// users.post('/login', (req, res) => {
//     User.findOne({
//         email: req.body.email
//     })
//     .then(user => {
//         if (user) {
//             if (bcrypt.compareSync(req.body.password, user.password)) {
//                 const payload = {
//                     _id: user.id,
//                     first_name: user.first_name,
//                     last_name: user.last_name,
//                     username: user.username,
//                     email: user.email
//                 }
//                 let token = jwt.sign(payload, process.env.SECRET_KEY, {
//                     expiresIn: 1440
//                 })
//                 res.send(token)
//             } else {
//                 res.json({error: 'Password is incorrect'})
//             }
//         } else {
//             res.json({error: 'User doesn\'t exist'})
//         }
//     })
//     .catch(err => {
//         res.send('error:' + err)
//     })
// })

// users.get('/profile', (req, res) =>{
//     var decoded = jwt.verify(req.headers['authorization', process.env.SECRET_KEY])

//     User.findOne({
//         _id: decoded._id
//     })
//     .then(user => {
//         if (user) {
//             res.json(user)
//         } else {
//             res.send('User does not exist')
//         }
//     })
//     .catch(err => {
//         res.send('error: ' + err)
//     })
// })

module.exports = router