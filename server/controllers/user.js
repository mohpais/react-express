'use strict';
const model = require('../models')
const userModel = model.User

exports.list_users = function(req, res) {
    userModel.getAllUser(function(err, user) {
        console.log('controller')
        if (err)
            res.send(err);
            console.log('res', user);
        res.json(user);
    });
};

exports.create_user = function(req, res) {
    var new_user = new userModel(req.body);
    if(!new_user.profile_id || !new_task.role || !new_task.username || !new_task.password || !new_task.created_at){
        res.status(400).send({ error:true, message: 'Please provide data' });
    } else{
        userModel.createUser(new_user, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
};