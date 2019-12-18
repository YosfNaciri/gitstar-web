import React, { Component } from 'react';
import { Card, Margin} from 'react-uikit';
import Container from 'react-uikit/lib/components/Container';
import Avatar from './Avatar';
import Grid from 'react-uikit/lib/components/Grid';
import Width from 'react-uikit/lib/components/Width';

import Body from './Body';




class Cards extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
      const { repos} = this.props;
    return (
        <Margin>
            <Container>     
                <Card className= "uk-card-hover">
                    <Grid>
                        <Width style={{alignSelf : "center"}}  xs="1-4">
                            <Avatar avatar_url={repos.owner.avatar_url} />
                        </Width>
                        <Width style={{ padding : 0 }}  xs="3-4">
                            <Body repos={repos} />
                        </Width>
                    </Grid>
                </Card>
            </Container>    
        </Margin>
    )
  }
}

export default Cards;