import { createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export function configureStore(initialState){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant())))
}