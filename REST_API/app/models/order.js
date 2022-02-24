'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        orderNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATE,
        },
        itemId : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId  : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ['Delivered','Dispatched','Pending','Canceled','Ordered'],
            allowNull: false
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
          },

    }, {});
    Order.associate = models => {
        Order.belongsTo(models.Item, {
          foreignKey: 'itemId '
        });
        Order.belongsTo(models.User, {
          foreignKey: 'userId '
        });
    
};
return Order;

};