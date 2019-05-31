import logger from 'redux-logger'
import {applyMiddleware, createStore, Middleware, Store, StoreEnhancer} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer';

function configureStore(): Store {
    const middlewares: Middleware[] = [thunkMiddleware, logger];
    const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);

    const enhancers: StoreEnhancer[] = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = composeWithDevTools(...enhancers);

    return createStore(rootReducer, composedEnhancers);
}


export const store: Store = configureStore();