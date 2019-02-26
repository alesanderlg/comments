import React, { Component } from 'react'
import './App.css'
import Comments from './Comments' 
import NewComment from './NewComment'

class App extends Component {

  state = {
    comments: []
  }

  sendComment = comment =>{
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <NewComment sendComment={this.sendComment}/>
          <Comments comments={this.state.comments}/>
        </div>
      </div>
    );
  }
}

export default App;
