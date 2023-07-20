import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a to-do app' },
    { id: 3, text: 'Deploy to production' },
  ]);

  const inputRef = useRef(null);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = () => {
    const text = inputRef.current.value.trim();
    if (text !== '') {
      const newTodo = { id: Date.now(), text };
      setTodos([...todos, newTodo]);
      inputRef.current.value = '';
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditingTodo = (id) => {
    setEditingTodoId(id);
  };
 
  const finishEditingTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  return (
    <>
    <main>
      <section>
        <div className='header'>
        <h1>My To-do List App</h1>
        </div>

        <div className='themain'>
          <div className='container'>
               <input type="text"className='add' ref={inputRef} />
               <button onClick={addTodo}>Add</button>
          </div>

          <div className='card'>
               {todos.map((todo) => (
                <li className='item' key={todo.id}>
                  <div className='chechHolder'>
                  <input type="checkbox" className='the'/>
                  </div>

                  <div className='taskHolder'>
                 {editingTodoId === todo.id ? (
                <input type="text"
                defaultValue={todo.text}
                onBlur={(e) => finishEditingTodo(todo.id, e.target.value)}
                autoFocus
                />
                ) : (
               <span>{todo.text}</span>
               )}
               </div>
              

              <div className='bttnHolder'>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => startEditingTodo(todo.id)}>Edit</button>
              </div>

              </li>
              ))}
      

          </div>
        
        
      

        </div>
      
      
      </section>
    </main>
    
    
    
    </>
  );
}

export default App;
