import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  getCampaignsForSupporters,
  getUser,
  handleSearch
} from "../../actions";
import SupporterCampaignCard from "../SupporterCampaignCard";
import "../../css/LoginLanding.css";

function SupporterLanding(props) {
  useEffect(() => {
    // AXIOS CALL TO GET CAMPAIGN LIST
    props.getCampaignsForSupporters();
    // GET USER DATA FROM LOCAL STORAGE
    props.getUser();
  }, []);

  // MAPPING THROUGH THIS INSTEAD OF DIRECTLY THROUGH PROPS.CAMPAIGN
  const filtered = props.campaigns.filter(
    item =>
      item.title.toLowerCase().includes(props.search.toLowerCase()) ||
      item.species.toLowerCase().includes(props.search.toLowerCase()) ||
      item.location.toLowerCase().includes(props.search.toLowerCase())
  );

  if (props.campaigns || props.campaigns !== null) {
    if (props.search) {
      return (
        <div className="sup-campaigns">
          <div className="search-form">
            <label htmlFor="search">
              <h2>Search Campaigns:</h2>
              <input
                type="text"
                name="search"
                onChange={e => props.handleSearch(e)}
              />
            </label>
          </div>
          <div className="sup-campaign-content">
            <div className="sup-campaign-cards">
              {filtered.map(item => (
                <SupporterCampaignCard
                  {...props}
                  item={item}
                  key={item.campaigns_id}
                />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="sup-campaigns">
          <div className="search-form">
            <label htmlFor="search">
              <h2>Search Campaigns:</h2>
              <input
                type="text"
                name="search"
                onChange={e => props.handleSearch(e)}
              />
            </label>
            <div className="sup-campaign-cards">
              {props.campaigns.map(item => (
                <SupporterCampaignCard
                  {...props}
                  item={item}
                  key={item.campaigns_id}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>There are no active campaigns at this time...</h1>
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
