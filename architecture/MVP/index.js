class Model {

  todoData = [];

  async loadData() {
    await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data => this.todoData.push(...data))
  }

  getData() {
    return this.todoData;
  }

  addTodo(val) {
    this.todoData.push(
      {
        userId: 1,
        id: this.todoData.length,
        title: val,
        completed: false
      }
    )
  }

  removeTodo(id) {
    this.todoData = this.todoData.filter(el => el.id != id);
  }

}

class Presenter {

  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    await model.loadData();
    this.view.setAddTodoHandler(this.addTodoCb.bind(this));
    this.view.setRemoveTodoHandler(this.removeTodoCb.bind(this));
    this.view.render(model.getData());
  }

  addTodoCb(val) {
    this.model.addTodo(val);
    this.view.render(this.model.getData());
  }

  removeTodoCb(id) {
    this.model.removeTodo(id);
    this.view.render(this.model.getData());
  }

}

class View {

  root = document.querySelector('#app');

  el = null;
  addTodoHandler = null;
  removeTodoHandler = null;

  render(data) {
    this.root.innerHTML = `
      <div class="js-todo">
        <h1>MVP Example</h1>
        <h2>TODO</h2>
        <ul class="js-todo-list">
          ${this.createTodoList(data)}
        </ul>
        <div>
        <input class="js-todo-input" required placeholder="task" />
        </div>
        <div>
        <button class="js-add-todo" type="submit">Add TODO</button>
        </div>
      </div>
    `;

    this.el = document.querySelector('.js-todo');
    this.attachHandlers();
  }

  createTodoList(data) {
    return data.map(el => 
      `<li class="todo-item" id="${el.id}">
        <button class="js-remove-todo">&#10008;</button>
        ${el.title}
        <input type="checkbox" ${el.completed ? 'checked' : ''}/>
      </li>`)
  }

  getEl() {
    return this.el;
  }

  setAddTodoHandler(handler) {
    this.addTodoHandler = handler;
  }

  setRemoveTodoHandler(handler) {
    this.removeTodoHandler = handler;
  }

  attachHandlers() {
    for (let item of this.el.querySelectorAll('.js-remove-todo')) {
      item.addEventListener('click', e => {
        let id = e.target.parentElement.id;
        this.removeTodoHandler(id);
      })
    }

    this.el.querySelector('.js-add-todo').addEventListener('click', () => {
      let val = this.el.querySelector('.js-todo-input').value;
      this.addTodoHandler(val);
    })
  }

}


const model = new Model();
const view = new View();

const presenter = new Presenter(model, view);