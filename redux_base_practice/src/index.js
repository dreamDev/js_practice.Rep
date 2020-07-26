import './styles.css'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')

// Создаем store с редьюсером и начальным значением стейта
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})
theme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
  ? 'dark'
  : 'light'
  store.dispatch(changeTheme(newTheme))
})

// Подписываемся на ререндер стейта
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value;
  [addBtn, subBtn].forEach(btn => btn.disabled = state.buttons.disabled)
})

// Диспатчим несуществующий экшен, что бы проинициализировать стейт начальным значением.
store.dispatch({ type: 'INIT_APPLICATION' })