import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    marginBottom: '.5rem',
    borderRadius: '4px'
  },
  input: {
    marginRight: '1rem'
  }
}

// С помощью деструктуризации сразу забираем нужный параметр из объекта props
function TodoItem({ todo, index, onChange }) {
  // Тут мы получаем объект с тем значением value, котороые мы передаем в Context.Provider в App.jsx
  const {removeTodo} = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          style={styles.input}
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed} />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}

export default TodoItem

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}