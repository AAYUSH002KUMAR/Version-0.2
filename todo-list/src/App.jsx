
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTodo = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Mark task completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = todos.length - completedTasks;

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>My To-Do List</h1>
        <p>Organize your day, one task at a time.</p>
      </header>

      {/* Main Container */}
      <main className="todo-container">

        {/* Add Task Form */}
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">
            Add Task
          </button>
        </form>

        {/* Statistics */}
        <div className="stats">

          <div className="stat-card">
            <h3>{todos.length}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>

          <div className="stat-card">
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>

        </div>

        {/* Task List */}
        <div className="task-section">

          <h2>My Tasks</h2>

          {todos.length === 0 ? (
            <p className="empty-message">
              No tasks yet. Add your first task!
            </p>
          ) : (
            <div className="task-list">

              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`task-item ${
                    todo.completed ? "completed" : ""
                  }`}
                >

                  <div className="task-left">

                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />

                    <span>{todo.text}</span>

                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>

      </main>

      {/* Footer */}
      <footer>
        <p>Stay productive. Stay organized.</p>
      </footer>

    </div>
  );
}

export default App;