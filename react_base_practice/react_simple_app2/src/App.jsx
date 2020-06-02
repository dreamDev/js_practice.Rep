import React, { useEffect } from 'react';
import Context from './context'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo';
import Loader from './Loader'
import Modal from './Modal/Modal';

function App() {

  // Функция useState ВСЕГДА возвращает массив, состоящий из 2 элементов.
  // Первый элемент массива это непосредственно само состояние, оно будет равно по умолчанию первому аргументу функции useState.
  // Второй элемент массива будет функция, которая позволяет изменять состояние данного компонента.
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(el => {
        if (el.id === id) {
          el.completed = !el.completed
        }
        return el
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(el => el.id !== id)
    )
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    // Для того что бы передавать определенные функция сквозь другие компоненты, необходимо обернуть весь шаблон в специальный компонент, который называется Context.Propvider
    // В пропс провайдера мы можем передавать что угодно, стейт, функции и т.д.
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} />
          : (
            loading ? null : <p>No Todos!</p>
          )}
      </div>
    </Context.Provider>
  );
}

export default App;
