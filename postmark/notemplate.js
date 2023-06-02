require('dotenv').config()
const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

exports.sendEmail = async (to, subject, body) => {
    try {
        const response = await client.sendEmail({
            From: process.env.EMAIL_FROM,
            To: to,
            Subject: subject,
            HtmlBody: body
        });

        console.log('Email sent successfully:', response.Message);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

// Usage
//sendEmail('marvelousakporowho@gmail.com', 'Hello', 'This is the email body.');
