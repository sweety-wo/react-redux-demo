import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <h1>Welcome to React-Redux Demo</h1>
        </div>
        <Helmet title="Home"/>
        <div className="container">

        </div>
      </div>
    );
  }
}
