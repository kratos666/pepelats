import express from 'express'

const auth = express.Router()

auth.post('/', (req, res) => {
	const { email, password } = req.body
})

export default auth