import { LOGIN_SUCCESS, LOGOUT } from "../actions/types.actions";

let initialState = {
   profile: null
}

const UserReducer = (state = initialState, actions) => {
   switch (actions.type) {
      case LOGIN_SUCCESS:
         state.profile = actions.payload
         localStorage.setItem('profile', JSON.stringify(state.profile))
         return { ...state }
      case LOGOUT:
         state.profile = null
         localStorage.removeItem('profile')
         return { ...state }
      default:
         return state
   }
}

export default UserReducer