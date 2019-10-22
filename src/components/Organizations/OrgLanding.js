import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getCampaignsForOrganizations, getUser } from "../../actions";

function OrgLanding(props) {
  console.log(props);
  useEffect(() => {
    props.getUser()
    props.getCampaignsForOrganizations();
  }, []);

  if (props.campaigns.length !== 0) {
    return (
      <div>
        {props.campaigns.campaigns.map(item => (
          <div key={item.campaigns_id}>
            <h1>{item.title}</h1>
            <h1>{item.species}</h1>
          </div>
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
