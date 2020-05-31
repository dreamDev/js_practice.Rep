import React from 'react'
import Article from './Article/Article'
import './ArticleList.scss'

class ArticleList extends React.Component {
  state = {
    openArticleId: null
  }
  render() {
    const articleList = this.props.articles.map((el, i) =>
      // Каждому элементу массива именно на верхнем уровне необходимо задать уникалный prop: key
      // Он должен быть уникальным в пределах ЭТОГО массива, id подходит идеального для такого случая
      // Индексы в массиве использовать не стоит
      <li key={el.id} className="article_list">
        <Article
          article={el}
          isOpen={this.state.openArticleId === el.id}
          onButtonClick={this.handleClick.bind(this, el.id)}
        />
      </li>
    )
    return (
      <ul>
        {articleList}
      </ul>
    )
  }
  handleClick = openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
  })
}

export default ArticleList