import React, { Component } from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from 'react-redux';


class Loading extends Component {

constructor(props) {
    super(props);
    this.state = {
         
    };
} 

  render() {
    const style = {
      card : {
          
          maxWidth: "100%", 
          borderRadius : 25,
          margin : "1%",
          background : this.props.theme.card,
        }
    }
    return (
      <div style = {style.card} >
        <CardHeader
          avatar={
              <Skeleton variant="circle" width={40} height={40} />
          }
         
          title = {<Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />} 
          subheader ={ <Skeleton height={10} width="40%" />}
        />
        <CardContent>
            <React.Fragment>
              <Skeleton height={10} style={{ marginBottom: 6 }} />
              <Skeleton height={10} width="100%" />
            </React.Fragment>
        </CardContent>
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
export default connect(mapStateToProps,mapDispatchToProps) (Loading); 
