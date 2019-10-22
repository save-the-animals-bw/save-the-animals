import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

function SupporterLanding(props) {
    console.log(props)
    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('https://saving-the-animals.herokuapp.com/api/campaigns/supporters')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('error fetching data', err))
    }, [])
    return (
        <div>
            <h1>This is SupporterLanding</h1>
        </div>
    )
}

export default SupporterLanding
