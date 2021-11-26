import {combineReducers} from 'redux';
import docsStateReducer from './docsStateReducer';
import mainGridsReducer from './mainGridsReducer';
import iconDisplayReducer from './iconDisplayReducer';





export default combineReducers({docsStateReducer, mainGridsReducer, iconDisplayReducer});