import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import { userLoginReducer } from '../src/reducers/userReducers'
import { configureStore, Action, getDefaultMiddleware  } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')!)
  : undefined

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
} as {}

export type RootState = ReturnType<typeof store.getState>

export default store
