const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
  value: 'string',
  done: 'boolean',
});

module.exports = model('Todo', TodoSchema);
