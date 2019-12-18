import React, { Component } from 'react';
import { CardBody, Container} from 'react-uikit';
import Footer from './Footer';
import Header from './Header';

class Body extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
    const { name , description , stargazers_count , created_at , open_issues_count } = this.props.repos;
    return (
        <Container >
            <Header name = {name}/>
            <CardBody>
                {description}
            </CardBody>
            <Footer stargazers_count={stargazers_count} created_at = {created_at} open_issues_count = {open_issues_count} />
        </Container>
    )
  }
}

export default Body;