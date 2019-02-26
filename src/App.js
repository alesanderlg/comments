import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Definir meu estado interno
  state = {
    newComment: '',
    comments: []
  }

  handleChange = event => {
      this.setState({
        newComment: event.target.value
      })
  }

  sendComment = () =>{
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            {/* New Comment */}
            <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button onClick={this.sendComment}>Send</button>
            {JSON.stringify(this.state)}
          </div>
          {/** Comments */}
          <div>
            {/* Comment */}
            {this.state.comments.map(comment =>{
              return <div>{comment}</div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
