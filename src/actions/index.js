import axiosWithAuth from "../utils/axiosWithAuth"
import axios from 'axios'

// ACTION TYPES
export const SET_USER = 'SET_USER'
export const GET_CAMPAIGNS = 'GET_CAMPAIGNS'
export const GET_ORGS = 'GET_ORGS'
export const LOG_OUT = 'LOG_OUT' 
export const EDIT_ITEM = 'EDIT_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SEARCH = 'SEARCH'
export const DONATE_CAMPAIGN = 'DONATE_CAMPAIGN'



// ACTION FUNCTIONS
/******************USER FUNCTIONS*******************/ 
// LOGOUT USER
export const logout = () => dispatch => {
    localStorage.clear()
    dispatch({type:LOG_OUT})
}

// GETTING USER DATA FROM LOCAL STORAGE
export const getUser = () => dispatch => {
   dispatch({type: SET_USER, payload: JSON.parse(localStorage.getItem('user'))})
}



/*************************AXIOS CALLS*******************************/

// GET LIST OF ORGANIZATIONS WITH AXIOS CALL
export const getOrgs = () => dispatch => {
    axios
    .get('https://saving-the-animals.herokuapp.com/api/organizations')
    .then(res => {
        dispatch({type:GET_ORGS, payload:res.data})
    })
    .catch(err => console.log(err))
}

// GET LIST OF CAMPAIGNS BASED ON WHAT ORGANIZATION IS CURRENTLY LOGGED IN
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

//AXIOS CALL TO GET CAMPAIGNS FOR SUPPORTERS. WILL SHOW ALL CAMPAIGNS REGARDLESS OF ORGANIZATION
export const getCampaignsForSupporters = () => dispatch =>{
    axiosWithAuth()
    .get('https://saving-the-animals.herokuapp.com/api/campaigns/supporters')
    .then(res => {
        dispatch({type: GET_CAMPAIGNS, payload: res.data.campaigns})
    })
    .catch(err => console.log('error fetching data', err))
}

// HANDLE DELETION OF CAMPAIGN
export const handleDelete = (e, item) => dispatch => {
    e.preventDefault()
    axiosWithAuth()
    .delete(`https://saving-the-animals.herokuapp.com/api/campaigns/${item.campaigns_id}`)
    .then(res => {
        console.log('Item Deleted', res)
        dispatch({type: DELETE_ITEM, payload: item})
    })
    .catch(err => console.log('Error Deleting Item', err))
}



/***********************UTILITIES*****************************/

//HOLDS STATE FOR ITEM WHILE LOADING NEW PAGE AND SENDS STATE TO NEW PAGE
export const editItem = (e, item) => dispatch => {
    e.preventDefault()
    dispatch({type:EDIT_ITEM, payload: item})
}


// HOLDS SEARCH VALUE 
export const handleSearch = (e) => dispatch => {
    e.preventDefault()
    dispatch({type:SEARCH, payload: e.target.value})
}

//HOLDS STATE OF ITEM WHILE DONATING
export const handleDonate = (e, item) => dispatch => {
    e.preventDefault()
    dispatch({type:DONATE_CAMPAIGN, payload:item})
}


