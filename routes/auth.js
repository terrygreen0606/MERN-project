const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// Authorization
const auth = require('../middleware/auth')

// User Model
const User = require('../models/user')

// Url prefix is '/users' in server.js (app.use('/auth'))
// Route /auth, Public
// Post request, Auth user
router.post('/', (req, res) => {
    const { email, password} = req.body

    // Simply Validation
    if (!email || !password) {
        return res.status(400).json({msg: 'Insert all info'})
    }

    // Check for existence
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(400).json({msg: 'user does not exist'})
            }

            // Validate password
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if (!isMatch) return res.status(400).json({msg: 'password does not match'})

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

// Url prefix is '/users' in server.js (app.use('/auth'))
// Route /auth, Private
// Get request, Auth user
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')    // Disregarding Password
        .then(user => res.json(user))
})

module.exports = router