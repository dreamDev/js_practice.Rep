import React from 'react';
import './App.scss';
import ArticleList from '../ArticleList/ArticleList'
import articles from '../../fixtures'

class App extends React.Component {
  state = {
    reverted: false
  }
  render() {
    return (
      <div className="container">
        <h1>App name
          <button onClick={this.revert}>Revert articles</button>
        </h1>
        <ArticleList articles={this.state.reverted ? [...articles].reverse() : articles}/>
      </div>
    )
  }
  revert = () => this.setState({
    reverted: !this.state.reverted
  })
}

export default App;
