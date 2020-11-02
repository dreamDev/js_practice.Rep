import { reducer } from './model/reducer'
import { createStore } from './model/store'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')

const store = createStore(reducer, 0)

store.subscribe(() => {
  let state = store.getState()
  counter.textContent = state
})

store.dispatch({type: '__INIT__'})


addBtn.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})
subBtn.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'})
})