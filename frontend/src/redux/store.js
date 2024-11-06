import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


const store = configureStore({
    reducer: {user: userReducer,}, // Na razie pozostaw puste
});

export default store;