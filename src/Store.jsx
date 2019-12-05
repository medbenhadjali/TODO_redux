import {createStore} from "redux";
import todoreducer from './Reduser';

 const store =createStore(todoreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


 export default store ;
 