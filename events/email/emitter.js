const EventEmitter = require('events');

const emailEvent = new EventEmitter();

const { sendEmail } = require('../../postmark/notemplate');
const { sendEmailWithTemplate } = require('../../postmark/template');


emailEvent.on('send', async (requestData, callback) => {
    requestData.status = true
    let { recipient, subject, message } = requestData
    const response = await sendEmail(recipient, subject, message);
    callback(response);
});

emailEvent.on('sendWithTemplate', async (requestData, callback) => {
    let { recipient, templateId, model } = requestData
	console.log(requestData)
    const response = await sendEmailWithTemplate(recipient, templateId, model);
    callback(response);
});

module.exports = {
    emailEvent
}