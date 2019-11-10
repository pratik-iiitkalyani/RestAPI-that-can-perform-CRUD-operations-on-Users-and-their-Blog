'use strict'

const Router = require("express").Router();
const BlogCtrl = require('../app/database/controllers/blog');
const UserCtrl = require('../app/database/controllers/user');


Router.route('/blog')
    .post(async function (req, res) {
        try {
            let response = await BlogCtrl.createBlog(req.body);
            res.json(response);
        
        } catch (err) {
            console.log("Error in /blog post", err)
            res.status(400).json({ "message": "Problem in creating blog." })
            
        }
    })

    .get(async (req, res) => {
        try {
            const allData = await BlogCtrl.getAllBlog()
            res.json(allData);

        } catch (err) {
            console.log("Error in /user get", err)
            res.status(400).json({ "message": "Problem in fetching blog." })
        }
    })



Router.route('/blog/:id')
    .get(async(req, res) =>{
        try {
            const response = await BlogCtrl.getBlogById(req.params.id)
            res.json(response);

        } catch(err) {
            console.log("Error in /user/:id get", err)
            res.status(400).json({ "message": "Problem in fetching blog By Id." })
        }
    })

    .put(async (req, res) => {
        try {
            const result = await BlogCtrl.getBlogById(req.params.id)
            if (result.userId == req.body.userId) {
                const response = await BlogCtrl.updateBlog(req.params.id, req.body)
                res.json(response)
            }
            else {
                res.json('You are not authorized to update the blog')
            }
            

        } catch (err) {
            console.log("Error in /user/:id put", err)
            res.status(400).json({ "message": "Problem in updating blog By Id." })
        }
    })

    .delete(async function (req, res) {
        try {
            const response = await BlogCtrl.deleteBlog(req.params.id)
            res.json(response);

        } catch (err) {
            console.log("Error in /user/:id delete", err)
            res.status(400).json({ "message": "Problem in deleting blog By Id." });
        }
    })




module.exports = Router


