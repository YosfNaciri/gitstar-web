import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
        };
    } 


  render() {
      const { name } = this.props
    return (
        <div className='Header'>
           <h4>
               {name}
           </h4>
        </div>
    )
  }
}

export default Header;