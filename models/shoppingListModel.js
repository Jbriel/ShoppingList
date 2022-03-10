module.exports = (sequelize, DataTypes) => {
    const shoppingListModel = sequelize.define('shoppingListItems', {
        itemID: {
            field: "item_id",
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
          },
          itemName: {
            field: "name",
            type: DataTypes.STRING,
            allowNull: false,
          },
          itemDescription: {
            field: "description",
            type: DataTypes.STRING,
            allowNull: false,
          }

    }, {
    createdAt: 'creation_date',
    updatedAt: 'last_mod_date',    
    timestamps: true,
    tableName: 'shopping_list_items',
  })
  return shoppingListModel
}