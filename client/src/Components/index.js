import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  toggleEditable,
} from '../Redux';

function Todos() {
  const [todoTxt, setTodoTxt] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoTxt.trim()) {
            dispatch(
              addTodo({
                value: todoTxt,
                done: false,
                editable: false,
                id: nanoid(10),
              })
            );
            setTodoTxt('');
          }
        }}
      >
        <input
          type="text"
          value={todoTxt}
          onChange={(e) => setTodoTxt(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo">
              <span
                className="todo__value"
                contentEditable={todo.editable}
                suppressContentEditableWarning={true}
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    dispatch(
                      editTodo({ id: todo.id, value: e.target.textContent })
                    );
                    dispatch(toggleEditable({ id: todo.id }));
                  }
                }}
              >
                {todo.value}
              </span>
              <button onClick={() => dispatch(completeTodo({ id: todo.id }))}>
                Done?
              </button>
              <button onClick={() => dispatch(toggleEditable({ id: todo.id }))}>
                Edit
              </button>
              <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
