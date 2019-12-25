import { TOGGLE_DARK_THEME, TOGGLE_LIGHT_THEME } from './themeTypes';
import {themes} from './theme'

export function onToggleDark() {
    const theme = themes.dark_theme
    console.log(theme);
return {
  type: TOGGLE_DARK_THEME,
  theme : theme
}
}

export function onToggleLight(){
    const theme = themes.light_theme
    console.log(theme);
return {
  type: TOGGLE_LIGHT_THEME,
  theme: theme
}
}
