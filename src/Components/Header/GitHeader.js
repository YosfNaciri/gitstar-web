import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from '@material-ui/core';
import ToggleSwitch from '../Switch/ToggleSwitch';
import { connect } from 'react-redux';

class GitHeader extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
    return (
        <div style={{flexGrow: 1}}>
        <AppBar position="sticky" style={{ color : this.props.theme.navbarText ,background : this.props.theme.navbar}}>
         <Toolbar>   
         <GitHubIcon style={{padding : 10 ,fontSize: 40 }} />
         <Typography variant="inherit" style={{flexGrow : 1}} component="h2">Github Trending Repos</Typography>
        <ToggleSwitch />
        </Toolbar>
      </AppBar>
      </div>
     )
  }
}

const mapStateToProps = (state) => { 
  return {
    toggleDark : state.themes.toggleDark,
    theme: state.themes.theme
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps) (GitHeader); 
