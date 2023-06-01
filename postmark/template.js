require('dotenv').config()
const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

const sendEmailWithTemplate = async (to, templateId, templateModel) => {
    try {
        const response = await client.sendEmailWithTemplate({
            From: 'noreply@topuniverse.org',
            To: to,
            TemplateId: templateId,
            TemplateModel: templateModel
        });

        console.log('Email sent successfully:', response.Message);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

// Usage
const recipient = 'marvelousakporowho@gmail.com';
const templateId = '31977350';
const templateModel = {
    name: 'John Doe',
    message: 'Hello, this is a test email using a Postmark template.'
};

//sendEmailWithTemplate(recipient, templateId, templateModel);