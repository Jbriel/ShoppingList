const express = require("express");

const shoppingListRouter = express.Router();

const  {shoppingListController} = require("../controllers")

shoppingListRouter.route('/').get(shoppingListController.getShoppingItems)
shoppingListRouter.route('/').post(shoppingListController.createShoppingListItem)
shoppingListRouter.route('/').put(shoppingListController.updateShoppingListItem)
shoppingListRouter.route('/').delete(shoppingListController.deleteShoppingListItem)

module.exports = shoppingListRouter