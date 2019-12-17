import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
        };
    } 


  render() {
    const { star , creation} = this.props
    return (
        <div className='Footer'>
           <h4>
               {star} , {creation}
           </h4>
        </div>
    )
  }
}

export default Footer;