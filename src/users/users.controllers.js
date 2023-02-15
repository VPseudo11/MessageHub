const Users = require('../models/users.models')
const uuid = require('uuid')

const getAllUsers = async () => {
    const response = await Users.findAll()
    return response
}

const getUserbyId = async (id) => {
    const response = await Users.findOne({
        where: {
            id: id,
        }
    })
    return response
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        profileImage: data.profileImage,
        phone: data.phone
    })
    return newUser
}

const updateUser = async (id, data) => {
    const response = await Users.update(data, {
        where: {
            id: id
        }
    })
    return response
}

const deleteUser = async (id) => {
    const response = await Users.destroy({
        where: {
            id: id
        }
    })
    return response
}

const getUserByEmail = async (email) => {
    const response = await Users.findOne({
        where: {
            email: email
        }
    })
    return response
}

module.exports = {
    getAllUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}