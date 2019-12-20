import React, { Component } from 'react'
import Cards from './Components/Card/Cards';
import GitHeader from './Components/Header/GitHeader';
import  Loading  from './Components/loading/Loading';
import { connect } from 'react-redux';
import { fetchRepos,refreshRepos } from './Actions/RepositoriesAction';
import moment from 'moment';
import { Container } from '@material-ui/core';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      page : 1,
      items : []
    }
  }

  /*componentDidMount(){

    let date = "2019-11-17"
    getRepos(date,this.state.page).then( data => {
      this.setState({
        items :[ ...this.state.items, ...data.items],
        isLoading : false
      })
    });

  }*/
  
  componentDidMount(){
    this.setState({date : this.getDate30()}, () => this._loadRepos(this.state.date,this.state.page))
   }

  getDate30(){ // funtction to help us get the date one month before the current date.
    let today = new Date();
    let lastMonthDate = moment(today).subtract(30,'day').format("YYYY-MM-DD");
  // we substract 30 days from th current date (-1 month)
    return   lastMonthDate;
  }

  _refresh(date){
    this.setState({page : 1})
    this.props.refreshRepos(date)
  }

  _loadRepos(date,page){
    this.props.getRepos(date,page)
  }


  _loader(){

    if(this.props.isFetching && !this.props.isRefreshing){
      return(
        <div>
          <Loading/>
          <Loading/>
          <Loading/>
        </div>
       
      )
    }
  }



  render() {
    return (
      
        <div>
          <GitHeader/>  
          <Container>
          { this.props.repos.map( (item) => (
            <Cards key = { item.id } repos = { item }/>
          ))
          } 
          {this._loader()}
          </Container>
        </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    repos: state.repositories.repos,
    isFetching: state.repositories.isFetching,
    isRefreshing : state.repositories.isRefreshing,
    error: state.repositories.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRepos: (date,page) => {
      dispatch(fetchRepos(date,page))
    },
    refreshRepos: (date) => {
      dispatch(refreshRepos(date))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

