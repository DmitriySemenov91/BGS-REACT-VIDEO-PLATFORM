import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./root.reducer";

export const store = createStore(RootReducer, compose(applyMiddleware(thunk)));
