import React, { Component } from 'react';
import Guest from './Guest';

export default class User extends Component {
  render() {
    return (
      <>
        <h2>User Class Component</h2>
        <hr/>
        <Guest gno={this.props.uno}/>
      </>
    );
  }
}
