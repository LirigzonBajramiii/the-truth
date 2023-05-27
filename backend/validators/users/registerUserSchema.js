const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().min(10).max(100).required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
  firstName: Joi.string().min(3).max(100).required(),
});

module.exports = schema;
