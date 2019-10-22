import { SET_USER, GET_CAMPAIGNS, GET_ORGS } from "../actions"



const initialState = {
    user: '',
    campaigns: [],
    orgList: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ORGS:
            return{
                ...state,
                orgList: action.payload
            }
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