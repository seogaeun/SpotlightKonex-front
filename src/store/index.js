import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux';

import cropReducer from "../redux/cropReducer";

const rootReducer = combineReducers({
  crop: cropReducer,
});

const store = createStore(rootReducer);

export default store;