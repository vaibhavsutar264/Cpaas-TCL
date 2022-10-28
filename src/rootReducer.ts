import { combineReducers } from '@reduxjs/toolkit'
import { userLoginReducer } from '../src/reducers/userReducers'
const rootReducer = combineReducers({
    userLogin: userLoginReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer