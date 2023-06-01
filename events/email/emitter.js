const EventEmitter = require('events');

const emailEvent = new EventEmitter();

const { sendEmail } = require('../../postmark/notemplate');

// check if email exists
emailEvent.on('send', async (requestData, callback) => {
    requestData.status = true
    let { recipient, subject, message } = requestData
    const response = await sendEmail(recipient, subject, message);
    callback(response);
});

// check if account is verified
emailEvent.on('sendWithTemplate', (requestData, callback) => {
    callback(requestData);
});

module.exports = {
    emailEvent
}