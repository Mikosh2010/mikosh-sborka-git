import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'; // Замените этот импорт на ваш корневой редьюсер

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
