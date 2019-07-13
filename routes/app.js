const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const myObj = {"data": "Hello World"};
	res.status(200).json([myObj]);
});

module.exports = router;