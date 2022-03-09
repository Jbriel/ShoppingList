
const getShoppingItems = (req, res) => {
    console.log("Get shopping items called")

    res.status(200).send({
        message: "Success",
        data: {}
    })
}
    
module.exports = {
    getShoppingItems
}