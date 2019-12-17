import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Card extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
      const { name , description , stargazers_count , created_at } = this.props.repos;
    return (
        <div className='Card'>
            <Header name = {name}/>
            <p>
                {description}
            </p>
            <Footer star = {stargazers_count} creation = {created_at}/>
           
        </div>
    )
  }
}

export default Card;