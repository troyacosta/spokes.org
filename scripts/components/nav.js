'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
   render() {
      return (
         <div>
            <h1><Link to="/">NAV</Link></h1>
            <h1><Link to="/home">Home</Link></h1>
            <h1><Link to="/about">About</Link></h1>
            <h1><Link to="/contacts">Contacts</Link></h1>
            {this.props.children}
         </div>
      )
   }
}
