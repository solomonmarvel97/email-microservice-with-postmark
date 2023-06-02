const Joi  = require("joi");

exports.emailSchema = Joi.object({
	template: Joi.boolean(),
    recipient: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()
});


exports.emailWithTemplateSchema = Joi.object({
	template: Joi.boolean(),
    recipient: Joi.string().email().required(),
    templateId: Joi.string().required(),
    model: Joi.object().required()
});