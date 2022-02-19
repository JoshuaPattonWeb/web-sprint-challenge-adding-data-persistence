// build your `/api/tasks` router here
const { create } = require('domain')
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.getAll()
        .then((task) => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const createTask = await Tasks.create(req.body)
        res.status(201).json({
            task_id: createTask.task_id,
            task_description: createTask.task_description,
            task_notes: createTask.task_notes,
            task_completed: createTask.task_completed === 0 ? false : true,
            project_id: createTask.project_id
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router