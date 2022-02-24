'use strict';
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufactureDate: {
            type: DataTypes.DATE,
        },
        expiryDate: {
            type: DataTypes.DATE,
        },
        manufacturerId : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {});
    Item.associate = models => {
        Item.belongsTo(models.manufactures, {
          foreignKey: 'manufacturerId '
        });
      }
    return Item;
};