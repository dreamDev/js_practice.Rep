import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Кастомный хук
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form action="" style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      {/* <input value={value} onChange={event => setValue(event.target.value)} type="text" /> */}
      {/* С помощью spread оператора разворачиваем объект input возвращенный из хука. Такая запись идентична той, что сверху. */}
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo