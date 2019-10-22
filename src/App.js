import React, { useState } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

import NavBar from './components/NavBar'

// PUBLIC ROUTE IMPORTS
import Landing from './components/Landing'
import Register from './components/Register'
import OrgLogin from './components/OrgLogin'
import SupporterLogin from './components/SupporterLogin'

//SUPPORTER IMPORTS
import SupportCampaign from './components/Supporters/SupportCampaign'
import SupporterLanding from './components/Supporters/SupporterLanding'
import Donate from './components/Supporters/Donate'
import Thanks from './components/Supporters/Thanks'

//ORGANIZATION IMPORTS
import OrgLanding from './components/Organizations/OrgLanding'
import AddCampaign from './components/Organizations/AddCampaign'
import Campaign from './components/Organizations/Campaign'
import EditCampaign from './components/Organizations/EditCampaign'


function App() {
  const [userType, setUserType] = useState()
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Landing}  />
      <Route path='/register' component={Register}  />
      <Route path='/org-login' render={props => <OrgLogin {...props} />} />
      <Route path='/supporter-login' render={props => <SupporterLogin {...props} />} />
      {/* SUPPORTER PRIVATE ROUTES */}
      <PrivateRoute exact path='/supporter-campaigns' component={SupporterLanding} />
      <PrivateRoute path='/supporter-campaigns/:id' component={SupportCampaign} />
      <PrivateRoute path='/supporter-campaigns/:id/donate' component={Donate}  />
      {/* ORGANIZATION PRIVATE ROUTES*/}
      <PrivateRoute exact path='/org-campaigns' component={OrgLanding} />
      <PrivateRoute path='/add-campaign' component={AddCampaign} />
      <PrivateRoute path='/org-campaigns/:id' component={Campaign} />
      <PrivateRoute path='/org-campaigns/:id/edit' component={EditCampaign} />
    </div>
  );
}

export default App;
