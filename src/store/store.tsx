import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from '../features/cardList/cardListslice';

// Redux store 만들기
export const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
