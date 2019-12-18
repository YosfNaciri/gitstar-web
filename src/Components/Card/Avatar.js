import React, { Component } from 'react';


class Avatar extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
      const { avatar_url } = this.props;
    return (

                  <img className="uk-border-rounded" alt="profile" width="80%" height="80%" src={avatar_url}/>
    )
  }
}

export default Avatar;