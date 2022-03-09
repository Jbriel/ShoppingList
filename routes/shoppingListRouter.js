const express = require("express");

const shoppingListRouter = express.Router();

const  {shoppingListController} = require("../controllers")

shoppingListRouter.route('/').get(shoppingListController.getShoppingItems)

module.exports = shoppingListRouter