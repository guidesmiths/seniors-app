import { combineReducers } from 'redux';

import { candidates } from './candidates/candidates';
import { ui } from './ui/ui';
import { formReducer } from './form';
import navigationReducer from './nav';

const AppReducer = combineReducers({
  root: combineReducers({
    navigationReducer,
    candidates,
    ui,
    formReducer
  })
});

const RootReducer = (state = { root: {} }, action) => {
  if (action.type === 'TOTAL_LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default RootReducer;
