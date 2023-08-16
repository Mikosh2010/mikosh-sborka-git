import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index'; // Замените этот импорт на ваш корневой редьюсер

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
