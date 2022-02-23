import { combineReducers } from "redux";
import AuthReducer from "./reducers/auth.reducer";
import MediaReducer from "./reducers/media.reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  media: MediaReducer,
});

export default RootReducer;
