import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "Homework" }
  ]);

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
