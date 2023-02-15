const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')
const Conversations = require('./conversations.models')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'conversation_id',
        references: {
            key: 'id',
            model: Conversations
        }
    },
    idAdmin: {
        type: DataTypes.BOOLEAN,
        field: 'is_admin'
    }
})

module.exports = Participants