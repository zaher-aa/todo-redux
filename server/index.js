// Express setup
const express = require('express');
const { addTodo } = require('./db/queries/todos');

const app = express();
app.set('port', 5000);
app.listen(app.get('port'), () =>
  console.log(`Running on http://localhost:${app.get('port')}`)
);

// Routes
app.get('/', async (req, res) => {
  try {
    const res = await addTodo({ value: 'hello world', done: false });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  res.json({ message: 'Server Is Running' });
});
