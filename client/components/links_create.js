import React ,  { Component } from 'react';

class LinkCreate extends Component {

  state = {
    error: ''
  }

  handleSubmit(event) {
    event.preventDefault() // this stops the page from refreshing when a form is submitted.

    Meteor.call('links.insert', this.refs.input.value, (err) => {
      if (err) {
        this.setState({error: 'Enter A valid URL please.'})
      } else {
        this.setState({error: ''})
        this.refs.input.value=''
      }
    })
    // to call the method we want .
    // the methods gets executed both on client and server
  }

  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Link to Shorten</label>
            <input ref='input' className="form-control" />
          </div>
          <div className="alert-danger">{this.state.error}</div>
          <button className="btn btn-success">Shorten</button>
        </form>
      </div>
    );
  };
};

export default LinkCreate;
