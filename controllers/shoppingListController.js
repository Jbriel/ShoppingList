const models = require('../models');

const getShoppingItems = async (req, res) => {
    let shoppingItems = await models.shoppingListModel.findAll({order: [
        ['itemID', 'ASC'],
        ['itemName', 'ASC'],
    ],});
    res.status(200).send({
        message: "Success",
        data: shoppingItems
    })
}

const createShoppingListItem = (req, res) => {
    models.shoppingListModel.create({
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription
    })
    res.status(200).send({
        message: "Success",
        data: {}
    })
}

const updateShoppingListItem = async (req, res) => {
    let updatedItemID = await models.shoppingListModel.update({
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription,
    },
    {where: {itemID: req.body.itemID}})

    let status = {}
    if(updatedItemID[0] == 0){
        status.message = 'Unable to find Item'
    }else{
        status.message = 'Success'
    }

    res.status(200).send(status)
}

const deleteShoppingListItem = async (req, res) => {
    const count = await models.shoppingListModel.destroy({where: {itemID: req.body.itemID}})

    let status = {}
    if(count == 0){
        status.message = 'Unable to find Item'
    }else{
        status.message = 'Success'
    }
    res.status(200).send(status)
}

    
module.exports = {
    getShoppingItems,
    createShoppingListItem,
    updateShoppingListItem,
    deleteShoppingListItem
}