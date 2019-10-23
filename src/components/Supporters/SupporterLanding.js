import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getCampaignsForSupporters, getUser, handleSearch } from "../../actions";
import SupporterCampaignCard from "../SupporterCampaignCard";

function SupporterLanding(props) {

  useEffect(() => {
    // AXIOS CALL TO GET CAMPAIGN LIST
    props.getCampaignsForSupporters()
    // GET USER DATA FROM LOCAL STORAGE
    props.getUser();
  }, []);

  const filtered = props.campaigns.filter(item =>
    item.title.toLowerCase().includes(props.search.toLowerCase()) ||
    item.species.toLowerCase().includes(props.search.toLowerCase()) ||
    item.location.toLowerCase().includes(props.search.toLowerCase()))

  if (props.campaigns || props.campaigns === true) {
    if (props.search){
      return (
        <div className="sup-campaigns">
          <label htmlFor="search">
            Search Campaigns: 
            <input type="text" name="search" onChange={e => props.handleSearch(e)} />
          </label>
          {filtered.map(item => (
            <SupporterCampaignCard
              {...props}
              item={item}
              key={item.campaigns_id}
            />
          ))}
        </div>
      ); 
          } else {
            return (
              <div className="sup-campaigns">
                <label htmlFor="search">
                  Search Campaigns
                  <input type="text" name="search" onChange={e => props.handleSearch(e)} />
                </label>
                {props.campaigns.map(item => (
                  <SupporterCampaignCard
                    {...props}
                    item={item}
                    key={item.campaigns_id}
                  />
                ))}
              </div>
            ); 
          }
  } else {
    return (
      <div>
        <h1>You aren't supporting any active campaigns...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    campaigns: state.campaigns,
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { getCampaignsForSupporters, getUser, handleSearch }
)(SupporterLanding);
