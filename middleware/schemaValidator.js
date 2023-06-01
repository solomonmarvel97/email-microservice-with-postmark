const { validator } = require("./validator");

exports.schemaValidator = (schema) => {
  return async function (req, res, next) {
    try {
      let data = await validator(req.body, schema);
      if (!data.isValid) {
        throw Error(data.error);
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };
};
