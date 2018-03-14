import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {customerReducer} from './customerReducer';
import {certificateReducer} from './certificateReducer';

export default combineReducers({
  appState: appReducer,
  customerState: customerReducer,
  certificateState: certificateReducer,
  routing
})
