import {createStore} from 'redux';
import rootReducer from '../reducers/reducers';

export default function configStore(initValue){
  const store = createStore(rootReducer, initValue,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}