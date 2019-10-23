import React from "react";
import { connect } from "react-redux";

import { handleDonate } from '../../actions'

import SupporterCampaignCard from '../SupporterCampaignCard'

function SupportCampaign(props) {
  const item = props.campaigns
    ? props.campaigns.find(camp => `${camp.id}` === props.match.params.id)
    : false;

   // ROUTE TO DONATE TO SPECIFIC CAMPAIGN
   const routeToDonate = (e, item) => {
    e.preventDefault()
    props.history.push(`/supporter-campaigns/${item.id}/donate`)
  }

  if (item === false) {
    return (
      <div>
        <h1>Loading Campaign...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <SupporterCampaignCard {...props} item={item} />
        <button onClick={e => {
          routeToDonate(e, item)
          props.handleDonate(e, item)
          }}>Donate</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns
  };
};

export default connect(
  mapStateToProps,
  { handleDonate }
)(SupportCampaign);
