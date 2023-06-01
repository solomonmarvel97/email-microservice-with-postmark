const Joi  = require("joi");

exports.emailSchema = Joi.object({
    recipient: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()
});