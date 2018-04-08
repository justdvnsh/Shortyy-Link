import React , {Component } from 'react';
import { createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links'

class LinksList extends Component {

  renderRows() {
    return this.props.links.map((link) => {
      const { url, token, clicks } = link;
      const shortenedLink = `http://localhost:3000/${token}`

      return (
        <tr key={token}>
          <td>{url}</td>
          <td><a href={shortenedLink} target="_blank">{shortenedLink}</a></td>
          <td>{clicks}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>URL</th>
              <th>SHORTYY-LINK</th>
              <th>VISITS</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
};

export default createContainer(() => {

  Meteor.subscribe('links')

  return { links: Links.find({}).fetch() }

}, LinksList);
