const express = require('express');
const bcrypt = require('bcryptjs');
const  User  = require('../models/User');
const  Task  = require('../models/Task');
const jwt = require("jsonwebtoken");    
const { authorize, authenticate } = require("../middleware/auth");
const router = express.Router();    

router.post('/createNewTask', authenticate, authorize(['basic']), async (req, res) => {
    try {
        const task = await Task.create({ body: req.body.body, UserId: req.body.id });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.put('/updateTask/:id', authenticate, authorize(['basic', 'admin']), async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({ where: { id: taskId } });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // basic može da menja samo svoj task
        if (req.user.role === 'basic' && task.UserId !== req.user.id) {
            return res.status(403).json({ message: 'You do not have permission to update this task' });
        }

        const updatedTask = await task.update({ body: req.body.body });
        res.status(200).json(updatedTask);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.delete('/deleteTask/:id', authenticate, authorize(['admin']), async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({ where: { id: taskId } });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy;
        res.status(200).json(message="Task deleted successfully");

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/listTasks', authenticate, authorize(['basic','admin']), async (req, res) => {
    const { page = 1, size = 10, sort = 'ASC' } = req.query;
    try {
        const options = {
          limit: parseInt(size),
          offset: (page - 1) * size,
          order: [['createdAt', sort.toUpperCase()]],
          include: [{ model: User, attributes: ['id', 'username'] }],
        };

        const tasks = req.query.role === 'admin'
        ? await Task.findAndCountAll(options)
        : await Task.findAndCountAll({ ...options, where: { UserId: req.query.id } });

        res.json({ tasks: tasks.rows, total: tasks.count });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;