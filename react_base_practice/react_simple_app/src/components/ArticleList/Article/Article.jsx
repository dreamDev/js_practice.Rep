import React from 'react';
import './Article.scss'

class Article extends React.PureComponent {
  state = {
    color: null,
    counter: 0
  }
  // Метод вызывается перед render(), можем использовать например для отправки запроса на сервер для получения данных.
  componentWillMount() {
    console.log('---', 'mounting')
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('---', 'will recieve props')
  //   if (this.props.defaultOpen !== nextProps.defaultOpen) this.setState({
  //     isOpen: nextProps.defaultOpen
  //   })
  // }
  componentWillUpdate() {
    console.log('---', 'will update')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state !== nextState
  // }
  render() {
    const { article, isOpen, onButtonClick } = this.props
    //Если наш state = true, то рендерим body, иначе рендерим пустоту, так как в боди придет не section, а false
    const body = isOpen && <section>{article.text}</section>
    return (
      <div>
        <div className="article_title-holder">
          <h2 onClick={this.countUp}>
            {article.title} clicked {this.state.counter}
          </h2>
          <button onClick={onButtonClick}>{isOpen ? 'close' : 'open'}</button>
        </div>
        {body}
        <h3 style={{ color: '#' + this.state.color }}>creation date: {new Date(article.date).toDateString()}
          <button onClick={this.handleColor}>change date color</button>
        </h3>
      </div>
    )
  }
  countUp = () => this.setState({ counter: this.state.counter + 1 })
  handleColor = () => this.setState({ color: Math.floor(Math.random() * 16777215).toString(16) })
}

export default Article