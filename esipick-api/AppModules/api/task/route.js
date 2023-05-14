const TaskController = require('./controller');
const { validateCreateTask } = require('./middleware');

const router = require('express').Router();


router.post('/', validateCreateTask, TaskController.addTask);
router.get('/', TaskController.getTask);
router.put('/', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask);



module.exports = router;