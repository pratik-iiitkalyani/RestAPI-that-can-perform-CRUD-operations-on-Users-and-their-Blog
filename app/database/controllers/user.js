'use strict';

const User = require('../models/user');


function createUser(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = new User(data);
            let res = await user.save();
            resolve(res)

        } catch (err) {
            reject(err)
        }
    });

}

function getAllUser(query = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User.find(query).sort({ createdAt: 1 }).lean().exec()
            resolve(users)

        } catch (err) {
            reject(err)
        }

    })
}

function getUserById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(id);
            resolve(user)

        } catch (err) {
            reject(err)
        }

    })
}

function updateUser(id, newData) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User.findByIdAndUpdate(id, { "$set": newData })
            resolve(result)

        } catch (err) {
            reject(err)
        }

    });
}

function deleteUser(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await User.remove({"_id" : id})
            resolve(result)

        } catch (err) {
            reject(err)
        }
    })
}


module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}