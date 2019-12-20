import { createStore, combineReducers , applyMiddleware} from 'redux';
import RepositoriesReducer from './Reducers/RepositoriesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  repositories: RepositoriesReducer,
});


export const  store =  createStore(rootReducer, {} ,applyMiddleware(thunk));

