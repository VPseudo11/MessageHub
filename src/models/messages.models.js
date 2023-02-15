const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Participants = require('./participants.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    participantId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'participant_id',
        references: {
            key: 'id',
            model: Participants
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Messages