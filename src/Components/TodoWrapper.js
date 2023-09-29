import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun ,faMoon } from '@fortawesome/free-solid-svg-icons'
import TodoCompleted from "./TodoCompleted";
import { Tooltip } from '@mui/material'

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const handleDark = () => {
    setDarkMode(false);
    console.log(darkMode);
  };
  const handleDarkMode = () => {
    setDarkMode(true);
    console.log(darkMode);
  };
  return (
   <div className={`${darkMode && 'container-dark '}  container`}>
      <div className={`${darkMode && 'dark-TodoWrapper'} TodoWrapper`}>
        <h1 className={` ${darkMode && 'h1-dark '}`}>ToDo App !</h1>
        {darkMode ? (
          <Tooltip title="Light Mode">
          <button className="dark-toggle" onClick={handleDark}>
     <FontAwesomeIcon icon={faSun} size="2xl" style={{color: "#e7d513",}} />
          </button>
        </Tooltip>
        ) : (
          <Tooltip title="Dark Mode">
           <button className="dark-toggle" onClick={handleDarkMode}>
         <FontAwesomeIcon icon={faMoon} size="2xl" />
          </button>
        </Tooltip>
        )}
        <TodoForm addTodo={addTodo} dark={darkMode} />
        <br />
        {/* display todos */}
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} dark={darkMode}  task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              dark={darkMode} 

            />
        

          )
        )}
            {todos.completed &&<TodoCompleted/>}
      </div>
  
   </div> 
    );
};
