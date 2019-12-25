import { TOGGLE_DARK_THEME, TOGGLE_LIGHT_THEME } from '../../Actions/Theme/themeTypes'

const INITIAL_STATE = { 
    theme : [] ,
    toggleDark: false,
     }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
 ///////////////Fetching actions/////////
 case TOGGLE_DARK_THEME:{
    return { ...state, toggleDark: true, theme: action.theme };
  }
  case TOGGLE_LIGHT_THEME:{
    console.log(action.theme);
    return { ...state, toggleDark : false, theme: action.theme };
  }
///////////////Default actions/////////         
    default:
      return state;
  }
}