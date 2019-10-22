import axiosWithAuth from "../utils/axiosWithAuth"

export const SET_USER = 'SET_USER'
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS'



export const declareUser = user => dispatch => {
    dispatch({type: SET_USER, payload: user})
}

export const getCampaignsForOrganizations = () => dispatch => {
    axiosWithAuth()
    .get('https://saving-the-animals.herokuapp.com/api/campaigns/organizations')
    .then(res => {
        console.log('Fetched Data From Backend', res)
        dispatch({type: GET_CAMPAIGNS, payload: res.data})
    })
    .catch(err => {
        console.log('Error Fetching Data', err)
    })
}


