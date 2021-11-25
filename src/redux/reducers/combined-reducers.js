import {combineReducers} from 'redux';
import iconReducer from './icon-reducers';
import mainGridReducer from './main-grid-reducers';
import mainGridItemsReducer from './main-grid-items-reducers';





export default combineReducers({iconReducer, mainGridReducer, mainGridItemsReducer});
