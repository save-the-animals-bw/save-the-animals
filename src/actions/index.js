import axiosWithAuth from "../utils/axiosWithAuth"
import axios from 'axios'

export const SET_USER = 'SET_USER'
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS'
export const GET_ORGS = 'GET_ORGS'





export const getUser = () => dispatch => {
   dispatch({type: SET_USER, payload: JSON.parse(localStorage.getItem('user'))})
}

export const getOrgs = () => dispatch => {
    axios
    .get('https://saving-the-animals.herokuapp.com/api/organizations')
    .then(res => {
        dispatch({type:GET_ORGS, payload:res.data})
    })
    .catch(err => console.log(err))
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

export const getCampaignsForSupporters = () => dispatch =>{
    axiosWithAuth()
    .get('https://saving-the-animals.herokuapp.com/api/campaigns/supporters')
    .then(res => {
        dispatch({type: GET_CAMPAIGNS, payload: res.data.campaigns})
    })
    .catch(err => console.log('error fetching data', err))
}


