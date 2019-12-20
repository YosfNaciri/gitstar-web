import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from "@material-ui/core/Typography";


class GitHeader extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
    return (
     <div style={{textAlign : "center"}}>
         <GitHubIcon style={{ fontSize: 100 }} />
         <Typography variant="body2" component="h3">Github Trending</Typography>
     </div>
     )
  }
}

export default GitHeader;