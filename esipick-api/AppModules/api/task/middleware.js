const Joi = require('joi');

exports.validateCreateTask = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        priority: Joi.string().valid('High', 'Medium', 'Low'),
        status: Joi.string().valid('To Do', 'In Progress', 'Done')
    })
    const {error} = schema.validate(req.body);
    if(error){
        res.statusMessage = error.details[0].message;
        res.status(400);
        return res.end()
    }
    next()
}