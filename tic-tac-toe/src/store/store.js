import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer.js';

export let store = createStore(reducer);
