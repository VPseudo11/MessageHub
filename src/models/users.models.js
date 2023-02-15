const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileImage:{
        type: DataTypes.STRING,
        field: 'profile_image',
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_active',
        defaultValue: true,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Users