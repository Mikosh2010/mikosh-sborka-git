import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Убедитесь, что правильно импортировали ваш редюсер

const rootReducer = combineReducers({
  auth: authReducer // Убедитесь, что вы используете правильное имя поля для вашего редюсера (здесь используется "auth")
});

export default rootReducer;
