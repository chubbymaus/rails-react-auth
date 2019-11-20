import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Registration from './auth/Registration';

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Link to='/dashboard'>dashboard</Link>
        </div>
        <div>home</div>
        <Registration />
      </>
    );
  }
}

export default Home;
