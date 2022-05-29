const Todo = require('../models/Todos');

const getTodos = () => Todo.find();
const addTodo = ({ value, done }) => Todo.create({ value, done });
const deleteTodo = (_id) => Todo.deleteOne({ _id });
const editTodo = ({ _id, value }) =>
  Todo.updateOne({ _id }, { $set: { value } });
const toggleTodoCompleted = ({ _id, done }) =>
  Todo.updateOne({ _id }, { $set: { done } });

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodoCompleted,
};
