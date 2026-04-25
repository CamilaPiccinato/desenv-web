import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (inputValue.trim() === '') {
      alert('Por favor, digite uma tarefa.')
      return
    }
    const newTask = { id: Date.now(), text: inputValue.trim(), done: false }
    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleToggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAddTask()
  }

  const pending = tasks.filter(t => !t.done).length

  return (
    <div className="caixa">
      <div className="container">
        <div className="header">
          <h1>To-Do List</h1>
          {tasks.length > 0 && (
            <span className="badge">{pending} pendente{pending !== 1 ? 's' : ''}</span>
          )}
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAddTask}>Adicionar</button>
        </div>

        <ul>
          {tasks.length === 0 && (
            <li className="empty">Nenhuma tarefa ainda.</li>
          )}
          {tasks.map(task => (
            <li key={task.id} className={task.done ? 'concluida' : ''}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleTask(task.id)}
              />
              <span>{task.text}</span>
              <button
                className="btn-remover"
                onClick={() => handleRemoveTask(task.id)}
              >✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App