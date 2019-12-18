import React, { Component } from 'react';
import { CardFooter, Flex, Label} from 'react-uikit';
import Container from 'react-uikit/lib/components/Container';


class Footer extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
    const { stargazers_count , created_at , open_issues_count } = this.props;
    return (
        <CardFooter>
            <Flex align="left">
                <Container className="uk-margin-left">
                    <Label variant="warning">{stargazers_count}</Label>
                    <Label variant="danger">{open_issues_count}</Label>
                </Container>
                <Container className="uk-margin-right">{created_at}</Container>
            </Flex>
        </CardFooter>
    )
  }
}

export default Footer;