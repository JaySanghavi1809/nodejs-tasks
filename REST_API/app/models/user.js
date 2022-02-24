'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['male', 'female'],
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM,
            values: ['Admin', 'Customer', 'Manufacturer'],

        },
        status: {
            type: DataTypes.ENUM,
            values: ['Active', 'Deactive'],
        },
        isVerify: {
            type: DataTypes.INTEGER,

        },
        otp: {
            type: DataTypes.INTEGER,

        },
        expiryOtpTime: {
            type: DataTypes.INTEGER,
        },

    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};