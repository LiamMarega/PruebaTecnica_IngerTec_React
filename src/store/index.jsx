import { createStore, applyMiddleware,} from 'redux'
import reducer from './reducer/index.jsx'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
); 
export default store ;