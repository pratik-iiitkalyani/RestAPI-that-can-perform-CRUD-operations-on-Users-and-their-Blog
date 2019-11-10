'use strict'

const Router = require("express").Router();
const UserCtrl = require('../app/database/controllers/user');


Router.route('/user')
    .post(async function (req, res) {
        try {
            let response = await UserCtrl.createUser(req.body);
            res.json(response);
        
        } catch (err) {
            console.log("Error in /user post", err)
            res.status(400).json({ "message": "Problem in creating user or the email/username already exists." })
            
        }
    })

    .get(async (req, res) => {
        try {
            const allData = await UserCtrl.getAllUser()
            res.json(allData);

        } catch (err) {
            console.log("Error in /user get", err)
            res.status(400).json({ "message": "Problem in fetching user." })
        }
    })



Router.route('/user/:id')
    .get(async(req, res) =>{
        try {
            const response = await UserCtrl.getUserById(req.params.id)
            res.json(response);

        } catch(err) {
            console.log("Error in /user/:id get", err)
            res.status(400).json({ "message": "Problem in fetching User By Id." })
        }
    })

    .put(async (req, res) => {
        try {
            const response = await UserCtrl.updateUser(req.params.id, req.body)
            res.json(response);

        } catch (err) {
            console.log("Error in /user/:id put", err)
            res.status(400).json({ "message": "Problem in updating User By Id." })
        }
    })

    .delete(async function (req, res) {
        try {
            const response = await UserCtrl.deleteUser(req.params.id)
            res.json(response);

        } catch (err) {
            console.log("Error in /user/:id delete", err)
            res.status(400).json({ "message": "Problem in deleting User By Id." });
        }
    })




module.exports = Router


