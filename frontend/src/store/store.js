import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng LocalStorage
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;