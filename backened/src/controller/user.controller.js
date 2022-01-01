const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const User = require('../model/user.model');
const router=Router()
router.get("/", async function (req, res) {
    try{
        const users = await User.find().lean().exec()
        return res.status(200).json({users})
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.post("/", async function (req, res) {
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err.message);
    }
})
function check(user, data) {
    for (let i = 0; i < data.length; i++){
        if (user.email === data[i].email && user.password === data[i].password) {
            return true
        }
    }
    return false
}
router.post("/auth", async (req, res) => {
    try {
        const users = await User.find().lean().exec()
        let loggedInUser = req.body
        if (check(loggedInUser, users)) {
            res.status(200).json({ status:"success", loggedInUser })
        }
        else res.status(400).json({status:"failure"})
    } catch (error) {
        res.status(500).json({error:error})
    }
})
module.exports=router