import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handlerUsernameChange = this.handlerUsernameChange.bind(this);

    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }

  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlercommentchange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handlerTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    // const{username,comment,topic}=this.state;
    return (
      <form onSubmit={this.handlerSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlerUsernameChange}
          />
          <br />
          <label>Comments</label>
          <textarea
            type="text"
            value={this.state.comment}
            onChange={this.handlercommentchange}
          />
          <br />
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handlerTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <button type="submit">Submit </button>
        </div>
      </form>
    );
  }
}

export default Form;
