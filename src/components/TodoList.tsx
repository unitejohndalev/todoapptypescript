import React, { useState } from "react";


interface item {
  id: number;
  text: string;
  completed: boolean;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn Typescript with Unite", completed: false },
    { id: 2, text: "Build Todo List App", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };


  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
   clearInput()
   
  };

  const clearInput = () => {
    setInput('');
  }

//   const handleInputClick = () => {
//     const target = 
// setInput((e) => e);
//   }
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        onChange={(e) => setInput(e.currentTarget.value)}
        
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoList;
