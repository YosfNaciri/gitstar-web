import React, { Component } from 'react'
import Cards from './Components/Card/Cards';
import GitHeader from './Components/Header/GitHeader';
import  Loading  from './Components/loading/Loading';
import { connect } from 'react-redux';
import { fetchRepos,refreshRepos } from './Actions/RepositoriesAction';
import moment from 'moment';
import { Container } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';

const lastMonthDate = moment(new Date()).subtract(30,'day').format("YYYY-MM-DD");

class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      page : 1,
      items : []
    }
  }

  componentDidMount(){
    this._refresh(lastMonthDate)
  }
  

  _refresh(date){
    this.setState({page : 1})
    this.props.refreshRepos(date)
  }

  _loadRepos(date,page){
      this.props.getRepos(date,page)
  }


  _loader(){
    if(this.props.isFetching || this.props.isRefreshing){
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
      <InfiniteScroll
      dataLength={this.props.repos.length}
      next={() => {
        this.setState({page : this.state.page+1})  
        this._loadRepos(lastMonthDate,this.state.page)
      }}
      hasMore={!this.props.error}
      loader={<Container><Loading/></Container>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
         <Container>
          { this.props.repos.map( (item,index) => (
            <Cards key = { index } index = {index} repos = { item }/>
          ))
          } 
      </Container>
      </InfiniteScroll>
      
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
