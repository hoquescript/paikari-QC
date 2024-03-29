import { actionTypes } from './action';

export const initState = {
  isLoggedIn: false,
  userType: '',
  userId: '',
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          isLoggedIn: true,
          userType: action.payload.userType,
          userId: action.payload.userId,
        },
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...{ isLoggedIn: false },
      };
    default:
      return state;
  }
}

export default reducer;
