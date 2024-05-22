
import { configureStore } from '@reduxjs/toolkit';
import UsersReducers from './component/UsersReducers'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    users: UsersReducers
  }
});


export type RootState = ReturnType<typeof store.getState>;

export default store;
