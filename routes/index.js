const express = require('express');

const router = express.Router();

const apiVersion1 = process.env.ApiVersion1 || '/api';
const shoppingListRouter = require("./shoppingListRouter")

router.use(`${apiVersion1}/shoppingList`, shoppingListRouter);

module.exports = router
