// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getAll()
        .then((project) => {
        res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const createProject = await Projects.create(req.body)
        res.status(201).json({
            project_id: createProject.project_id,
            project_name: createProject.project_name,
            project_description: createProject.project_description,
            project_completed: createProject.project_completed === 0 ? false : true
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router