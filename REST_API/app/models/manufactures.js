'use strict';
module.exports = (sequelize, DataTypes) => {
    const Manufacture = sequelize.define('Manufacture', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        manufactureName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }, {});
    Manufacture.associate = models => {
        Manufacture.belongsTo(models.User, {
          foreignKey: 'userId  '
        });
      }
    return Manufacture;
};