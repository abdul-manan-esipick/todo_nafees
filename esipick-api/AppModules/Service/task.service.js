const TaskList = [];

const TaskService = {
	insertOne: (task) => {
		const temp = {...task};
		let i=0;
		// for(i=0;i<10;i++){
			task = {...temp}
			const id = `${Date.now()}${TaskList.length}`
			task['_id'] = id;
			task['title'] = `${task['title']} ${i}`;
			TaskList.push(task);
		// }

		return task;
	},

	removeOne: (id) => {
		const index = TaskList.findIndex((item) => item?._id === id);
		if(index < 0) return -1;
		TaskList.splice(index, 1)
		return []
	},

	find: (page, offset=5) => {
		let skip = (page * offset) - offset;
		skip = skip < 1 ? 0 : skip

		return TaskList.slice(skip, offset*page);
	},

	countDocument: () => {
		return TaskList.length;
	},

	updateOne: (task) => {
		const id = task._id;
		if(TaskList.length === 0) return [];

		const index = TaskList.findIndex((item) => item._id === id );
		if(index < 0)  return [];

		TaskList[index] = {...task};
		return TaskList[index];
	}
} 

module.exports = TaskService;
