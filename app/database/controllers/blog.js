'use strict';

const Blog = require('../models/blog');


function createBlog(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const blog = new Blog(data);
            let res = await blog.save();
            resolve(res)

        } catch (err) {
            reject(err)
        }
    });

}

function getAllBlog(query = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const blogs = await Blog.find(query).sort({ createdAt: 1 }).lean().exec()
            resolve(blogs)

        } catch (err) {
            reject(err)
        }

    })
}

function getBlogById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const blog = await Blog.findById(id);
            resolve(blog)

        } catch (err) {
            reject(err)
        }

    })
}

function updateBlog(id, newData) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Blog.findByIdAndUpdate(id, { "$set": newData })
            resolve(result)

        } catch (err) {
            reject(err)
        }

    });
}

function deleteBlog(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Blog.remove({"_id" : id})
            resolve(result)

        } catch (err) {
            reject(err)
        }
    })
}


module.exports = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}