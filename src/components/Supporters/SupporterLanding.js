import React, { useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { getCampaignsForSupporters, getUser } from '../../actions'
import { connect } from 'react-redux'

function SupporterLanding(props) {
    console.log(props)
    useEffect(() => {
        props.getCampaignsForSupporters();
        props.getUser();
    }, [])
    return (
        <div>
            <h1>This is SupporterLanding</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        campaigns: state.campaigns
    }
}

export default connect(mapStateToProps, { getCampaignsForSupporters, getUser })(SupporterLanding)
