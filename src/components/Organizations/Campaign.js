import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import OrgCampaignCard from '../OrgCampaignCard'

import { getUser, getCampaignsForOrganizations, editItem } from '../../actions'
import { connect } from 'react-redux'

function Campaign(props) {
    useEffect(() => {

        // GET USER DATA FROM LOCAL STORAGE
        props.getUser()

        // AXIOS CALL TO GET CAMPAIGNS FOR ORGANIZATIONS
        props.getCampaignsForOrganizations()
    }, [])

    // FIND THE INDIVIDUAL CAMPAIGN THAT WAS CLICKED ON. NEED TO WAIT FOR PROPS.CAMPAIGNS FIRST.
    const item = props.campaigns.length !== 0 ? props.campaigns.campaigns.find(campaign => `${campaign.campaigns_id}` === props.match.params.id) : false
    
    // DON'T TRY TO RENDER UNTIL WE HAVE OUR ITEM
    if(item === false){
        return (
            <div>
                <h1>Loading Campaign...</h1>
            </div>
        )
    } else {
    return (
        <div>
           <OrgCampaignCard {...props} item={item} />
           <button onClick={(e) => {
               props.editItem(e, item)
               props.history.push(`/org-campaigns/${item.campaigns_id}/edit`)
           }}>Edit Campaign</button>
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

export default connect(mapStateToProps, { getUser, getCampaignsForOrganizations, editItem })(Campaign)
