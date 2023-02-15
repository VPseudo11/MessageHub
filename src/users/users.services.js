const usersControllers = require('./users.controllers')
const handleResponse = require('../utils/handleResponse')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'All users successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.getUserbyId(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `user with id: ${id} retrieved successfully`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 404,
                    message: `user with id: ${id} does not exist`
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const postUser = (req, res) => {
    const { firstName, lastName, email, password, phone, profileImage } = req.body
    if (firstName && lastName && email && password && phone) {
        usersControllers.createUser({ firstName, lastName, email, password, phone, profileImage })
            .then(data => handleResponse.success({
                res,
                status: 200,
                message: 'user created successfully',
                data
            }))
            .catch(err => handleResponse.error({
                res,
                status: 404,
                message: err.message
            }))
    } else {
        handleResponse.error({
            res,
            status: 400,
            message: 'All fields must be completed',
            fields: {
                'firstName': 'string',
                'lastName': 'string',
                'email': 'example@example.com',
                'password': 'string',
                'phone': '+593999999999',
                'profileImage': 'string',
            }
        })
    }
}

const patchUser = (req, res) => {
    const id = req.params.id
    const { firstName, lastName, email, password, phone, profileImage } = req.body

    usersControllers.updateUser(id, { firstName, lastName, email, password, phone, profileImage })
        .then(data => {
            if (data[0]) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `User with id: ${id}, edited succesfull`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 400,
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const deleteUser = (req, res) => {
    const id = req.params.id

    usersControllers.deleteUser(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 404,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 400,
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}