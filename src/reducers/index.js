import { SET_USER, GET_CAMPAIGNS, GET_ORGS, LOG_OUT, EDIT_ITEM, DELETE_ITEM, SEARCH, DONATE_CAMPAIGN } from "../actions"



const initialState = {
    user: '',
    campaigns: [],
    orgList: [],
    itemToEdit: '',
    search: '',
    itemToDonate: '',
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case DONATE_CAMPAIGN:
            return{
                ...state,
                itemToDonate: action.payload
            }

        case SEARCH:
            return{
                ...state,
               search: action.payload
            }

        case DELETE_ITEM:
            if (state.campaigns.length >= 1){
            const newCampaigns = state.campaigns.filter(camp => camp.id !== action.payload.campaigns_id)
            return{
                ...state,
                campaigns: [...newCampaigns]
            }
        } else {
            return {
                ...state,
                campaigns: [{}]
            }
        }
        case EDIT_ITEM:
            return{
                ...state,
                itemToEdit: action.payload
            }
        case LOG_OUT:
            return{
                ...state,
                user: '',
            }
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