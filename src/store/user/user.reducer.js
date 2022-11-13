import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
      case USER_ACTION_TYPES.FETCH_CURRENT_USER_START:
        return {...state, isLoading: true};
      case USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS:
        return {...state, isLoading: false, currentUser: payload};
      case USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED:
        return {...state, isLoading: false, error: payload};
    default:
      return state;
  }
};
