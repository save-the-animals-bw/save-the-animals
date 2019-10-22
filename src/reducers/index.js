import { SET_USER, GET_CAMPAIGNS } from "../actions"



const initialState = {
    user: '',
    campaigns: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user: action.payload
            }

        case GET_CAMPAIGNS:
            return{
                ...state,
                campaigns: action.payload
            }

        default:
            return state
    }
}

export default rootReducer