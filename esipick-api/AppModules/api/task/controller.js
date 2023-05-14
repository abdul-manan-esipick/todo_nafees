const { ErrorHandler } = require("../../helper/errorHandler");
const TaskService = require("../../Service/task.service");


const TaskController = {

	addTask: async function (req, res, next) {
		try {
			const { title, priority, status } = req.body;
			const newTask = {
				title, priority, status
			}
			const data = TaskService.insertOne(newTask);
			res.json({ data, total: TaskService.countDocument() });																																										
		} catch (error) {
			next(error)
		}
	},

	updateTask: async function (req, res, next) {
		try {
			const data = TaskService.updateOne(req.body);
			if(data.length === 0){
				throw new ErrorHandler(404, "Given Task Id Doesn't exist")
			}
			res.json(data);
		} catch (error) {
			next(error)
		}
	},

	deleteTask: async function (req, res, next) {
		try {
			const id = req.params.id;
			const data = TaskService.removeOne(id);
			res.json({ data, total: TaskService.countDocument() })
		} catch (error) {
			next(error)
		}
	},

	getTask: async function (req, res, next) {
		try {
			const page = Number(req.query.page) || 0;
			const offset = Number(req.query.offset) || Number(process.env.OFFSET);

			const data = TaskService.find(page, offset);
			res.json({ data, total: TaskService.countDocument() });
		} catch (error) {
			next(error)
		}
	}
}

module.exports = TaskController;