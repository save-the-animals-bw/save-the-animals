import React, { useEffect } from 'react'

import { getUser, getCampaignsForOrganizations } from '../../actions'
import { connect } from 'react-redux'

function Campaign(props) {
    console.log('campaign props', props)
    useEffect(() => {
        props.getUser()
        props.getCampaignsForOrganizations()
    }, [])
    
    const item = props.campaigns.campaigns.find(campaign => `${campaign.campaigns_id}` === props.match.params.id)

    if(!item){
        return (
            <div>
                <h1>Loading Campaign...</h1>
            </div>
        )
    } else {
    return (
        <div>
            <h1>{item.title}</h1>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        campaigns: state.campaigns
    }
}

export default connect(mapStateToProps, { getUser, getCampaignsForOrganizations })(Campaign)
