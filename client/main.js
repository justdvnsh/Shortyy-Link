import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/links_create';
import {Links} from '../imports/collections/links';
import LinksList from './components/links_list'

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header /><br />
        <LinkCreate />
        <LinksList />
      </div>
    )
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('#my-render-target'))
})
