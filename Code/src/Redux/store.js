import { createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/reducer';
import thunk from 'redux-thunk';


// applyMiddleware 是将所有的中间件存储到一个数组里
export default function configStore(initValue){
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  let store = createStoreWithMiddleware(
    rootReducer,
    initValue, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
