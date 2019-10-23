import React, { useEffect } from "react";
import { connect } from "react-redux";
import OrgCampaignCard from '../OrgCampaignCard'

import { getCampaignsForOrganizations, getUser } from "../../actions";

function OrgLanding(props) {

  
  useEffect(() => {
    //GET USER INFO FROM LOCAL STORAGE AND GET LIST OF CAMPAIGNS
    props.getUser()

    // ENDPOINT IS DIFFERENT FROM SUPPORTER CAMPAIGNS
    props.getCampaignsForOrganizations();
  }, []);

  if (props.campaigns || props.campaigns === true) {
    return (
      <div className='org-campaigns'>
        {props.campaigns.campaigns.map(item => (
          <OrgCampaignCard {...props} item={item} key={item.campaigns_id} />
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
    campaigns: state.campaigns,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getCampaignsForOrganizations, getUser }
)(OrgLanding);
