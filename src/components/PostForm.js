import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="">Title: </label><br />
            <input type="text" name="title" id=""/>
          </div>
          <br/>
          <div>
            <label htmlFor="">Body: </label><br />
            <textarea name="body"></textarea>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;