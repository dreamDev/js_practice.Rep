import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      // Для того, что бы реакт не добавлял какой то корневой элемент и что бы была возможность использовать 2 корневых элемента, необходимо использовать React.Fragment
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
        {this.state.isOpen &&
          (<div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>Hello!</p>
              <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
            </div>
          </div>)}
      </React.Fragment>
    )
  }
}