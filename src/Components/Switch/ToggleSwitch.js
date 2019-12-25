import React, { Component } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { onToggleDark,onToggleLight } from '../../Actions/Theme/themeAction';


class ToggleQwitch extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 


handleChange = () => () => {
  if(!this.props.toggleDark)
    this.props.setDark()
  if(this.props.toggleDark)
    this.props.setLight()
  };
  

  render() {
    return (
        
        <div style = {{display : "inline-flex"}}>
            <Switch size="small" color="primary" onChange={this.handleChange()}/>
            {this.props.toggleDark ? (
            <Brightness2Icon/>
          ) : (
            <WbSunnyIcon/>
          )}
          
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
    setLight: () => {
      dispatch(onToggleLight())
    },
    setDark: () => {
      dispatch(onToggleDark())
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ToggleQwitch); 

