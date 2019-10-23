import React, { useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { connect } from 'react-redux'

import { getCampaignsForSupporters, getUser } from '../../actions'
import SupporterCampaignCard from '../SupporterCampaignCard'

function SupporterLanding(props) {
    useEffect(() => {

        // AXIOS CALL TO GET CAMPAIGN LIST
        props.getCampaignsForSupporters();

        // GET USER DATA FROM LOCAL STORAGE
        props.getUser();
    }, [])

    if (props.campaigns || props.campaigns === true) {
        return (
          <div className='sup-campaigns'>
            {props.campaigns.map(item => (
              <SupporterCampaignCard {...props} item={item} key={item.campaigns_id} />
            ))}
          </div>
        );
      } else {
        return (
          <div>
            <h1>There's nothing here!</h1>
          </div>
        );
      }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        campaigns: state.campaigns
    }
}

export default connect(mapStateToProps, { getCampaignsForSupporters, getUser })(SupporterLanding)
