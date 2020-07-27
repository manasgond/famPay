import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import homeReducer from 'containers/App/store/reducer';

const history = createBrowserHistory();

const combinedAppReducers = combineReducers({
  router: connectRouter(history),
  homeReducer
});

export default combinedAppReducers;