import { REFRESH_REPOS,REFRESH_REPOS_SUCCESS,REFRESH_REPOS_FAILURE,FETCHING_REPOS,FETCHING_REPOS_SUCCESS,FETCHING_REPOS_FAILURE   } from '../../Actions/Types'

const INITIAL_STATE = { 
    repos : [] ,
    isFetching: true,
    isRefreshing: false,
    error: null }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
 ///////////////Fetching actions/////////
 case FETCHING_REPOS:{
    return { ...state, isFetching: true, };
  }
  case FETCHING_REPOS_SUCCESS:{
    return { ...state, isFetching :false, error :false, repos: [...state.repos,...action.repos.items] };
  }
  case FETCHING_REPOS_FAILURE:{
    return { ...state, isFetching:false, error : true };
  }
///////////////Refreshing actions/////////
  case REFRESH_REPOS:{
    return { ...state, repos : [], isRefreshing: true, };
  }
  case REFRESH_REPOS_SUCCESS:{
    return { ...state, isRefreshing :false, error :false, repos: action.repos.items };
  }
  case REFRESH_REPOS_FAILURE:{
    return { ...state, isRefreshing: false, error : true };
  } 
///////////////Default actions/////////         
    default:
      return state;
  }
}