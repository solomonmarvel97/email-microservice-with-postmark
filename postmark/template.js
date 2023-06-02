require('dotenv').config()
const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

exports.sendEmailWithTemplate = async (to, templateId, templateModel) => {
    try {
        const response = await client.sendEmailWithTemplate({
            From: process.env.EMAIL_FROM,
            To: to,
            TemplateId: templateId,
            TemplateModel: templateModel
        });

        console.log('Email sent successfully:', response.Message);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};
