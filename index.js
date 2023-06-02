require('dotenv').config()
const express = require('express');
require('./events')

//email handler
const {schemaValidator} = require("./middleware/schemaValidator");
const {emailSchema} = require("./schema/emailSchema");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

/**
 * Send Email Controller.
 *
 * @route POST /email
 * @param {object} req.body - The request body containing the user data.
 * @returns {object} The email send successful.
 */
app.post('/email', async (req, res) => {
  try {
	schemaValidator(emailSchema)
	
	  if(req.body.template) {
	      const response = Events.emailEvent.emit('sendWithTemplate', req.body, (callback) => {
	      })
	      return res.status(200).json({"Received response": response});
	  }
	  
      const response = Events.emailEvent.emit('send', req.body, (callback) => {
      })
      res.status(200).json({"Received response": response});
    // verify registered caller
    
  } catch (err) {
    res.status(400).json({message: err.message})
  }
});


// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
