import React from "react";
import { connect } from "react-redux";

import SupporterCampaignCard from '../SupporterCampaignCard'

function SupportCampaign(props) {
  const item = props.campaigns
    ? props.campaigns.find(camp => `${camp.id}` === props.match.params.id)
    : false;

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
  {}
)(SupportCampaign);
