import React, { Component } from 'react'
import Cards from './Components/Card/Cards';
import GitHeader from './Components/Header/GitHeader';
import  Loading  from './Components/loading/Loading';
import { connect } from 'react-redux';
import { fetchRepos,refreshRepos } from './Actions/Repositories/RepositoriesAction';
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


  render() {
    return (
      <div id="root" style={{background : this.props.theme.body}}>
      <GitHeader/>
      <InfiniteScroll
      dataLength={this.props.repos.length}
      next={() => {
        this.setState({page : this.state.page+1})  
        this._loadRepos(lastMonthDate,this.state.page)
      }}
      hasMore={!this.props.error}
      loader={<Container><Loading/></Container>}
      endMessage={
        <p style={{textAlign: 'center', color : this.props.theme.text_secondary}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
         <Container>
          { this.props.repos.map( (item,index) => (
           <a key = { index } style={{textDecoration : "none"}} href={item.html_url} target='_blank' rel="noopener noreferrer"  >
              <Cards   repos = { item }/>
         </a>
          ))
          } 
      </Container>
      </InfiniteScroll>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    repos: state.repositories.repos,
    isFetching: state.repositories.isFetching,
    isRefreshing : state.repositories.isRefreshing,
    error: state.repositories.error,
    toggleDark : state.themes.toggleDark,
    theme: state.themes.theme
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
