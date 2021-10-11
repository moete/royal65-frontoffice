import { createSlice } from "@reduxjs/toolkit";
import api from '../api/api'
const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

//Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem('user')
    },
    registerSucces : (state,action) => {
      state.user = action.payload ;
      localStorage.setItem('user', JSON.stringify(action.payload))

    }
  },
});
export default userSlice.reducer;




// Actions
const { loginSuccess, logoutSuccess,registerSucces } = userSlice.actions

export const login = ({ username, password }) => async dispatch => {
  try {
    await api.post('/auth/signin', { username, password })
    dispatch(loginSuccess({ username }));
  } catch (e) {
    return console.error(e.message);
  }
}

export const register = ({name , username,adress,email,country,password}) => async dispatch => {
  try {
    await api.post('/auth/signup',{name,username,adress,email,country,password})
    dispatch(registerSucces({username}))
  }
  catch (e) {
    return console.error(e.message)
  }
} 


export const logout = () => async dispatch => {
  try {
    await api.post('/auth/logout')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}