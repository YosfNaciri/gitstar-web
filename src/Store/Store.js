import { createStore, combineReducers , applyMiddleware} from 'redux';
import RepositoriesReducer from './Reducers/RepositoriesReducer';
import ThemeReducer from './Reducers/ThemeReducer' 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  repositories: RepositoriesReducer,
  themes : ThemeReducer
});


export const  store =  createStore(rootReducer, {} ,applyMiddleware(thunk));

