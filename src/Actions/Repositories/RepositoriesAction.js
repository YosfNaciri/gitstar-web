import {FETCHING_REPOS, FETCHING_REPOS_FAILURE, FETCHING_REPOS_SUCCESS,
        REFRESH_REPOS, REFRESH_REPOS_FAILURE, REFRESH_REPOS_SUCCESS} from './repositoriesTypes';
        
import { REPOS_OPT_URL , REPOS_URL } from  '../../API/API';

export function getFetchRepos() {
    return {
      type: FETCHING_REPOS,
    }
  }
  
  export function getReposSuccess(repos){
    return {
      type: FETCHING_REPOS_SUCCESS,
      repos: repos,
    }
  }
  export function getReposFailure(){
    return {
      type: FETCHING_REPOS_FAILURE
    }
  }
  
  export function getRefreshRepos() {
    return {
      type: REFRESH_REPOS,
    }
  }
  
  export function refreshReposSuccess(repos){
    return {
      type: REFRESH_REPOS_SUCCESS,
      repos: repos,
    }
  }
  
  export function refreshReposFailure(){
    return {
      type: REFRESH_REPOS_FAILURE
    }
  }

  export function fetchRepos(date,page) {
    return (dispatch) => {
        dispatch(getFetchRepos())
       return(fetch(REPOS_URL+''+date+''+REPOS_OPT_URL+''+page)
       )
       .then(res => res.json())
       .then(json => {    
           dispatch(getReposSuccess(json))
         })
       .catch( err => dispatch(getReposFailure()))
     }
  }

  export function refreshRepos(date) {
      const page = 1
    return (dispatch) => {
        dispatch(getRefreshRepos())
       return(fetch(REPOS_URL+''+date+''+REPOS_OPT_URL+''+page)
       )
       .then(res => res.json())
       .then(json => {    
           dispatch(refreshReposSuccess(json))
         })
       .catch( err => dispatch(refreshReposFailure()))
     }
  }