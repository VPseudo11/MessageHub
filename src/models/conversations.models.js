const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    profileImage: {
        type: DataTypes.STRING,
        field: 'profile_image',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
    },
    isGroup: {
        type: DataTypes.BOOLEAN,
        field: 'is_group'
    }
})

module.exports = Conversations