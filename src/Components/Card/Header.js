import React, { Component } from 'react';
import { CardHeader, CardTitle} from 'react-uikit';

class Header extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
      const { name } = this.props;
      
    return (
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
    )
  }
}

export default Header;