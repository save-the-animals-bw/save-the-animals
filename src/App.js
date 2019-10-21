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
      <Route exact path='/' component={Landing} userType={userType} />
      <Route path='/register' component={Register} userType={userType} />
      <Route path='/org-login' render={props => <OrgLogin {...props} setUserType={setUserType} />} />
      <Route path='/supporter-login' render={props => <SupporterLogin {...props} setUserType={setUserType} />} />
      {/* SUPPORTER PRIVATE ROUTES */}
      <PrivateRoute path='/supporter-campaigns' render={props => <SupporterLanding {...props} userType={userType} />} />
      <PrivateRoute path='/supporter-campaigns/:id' render={(props) => <SupportCampaign {...props} userType={userType} />} />
      <PrivateRoute path='/supporter-campaigns/:id/donate' render={(props) => <Donate {...props} userType={userType} />} />
      {/* ORGANIZATION PRIVATE ROUTES*/}
      <PrivateRoute path='/org-campaigns' render={props => <OrgLanding {...props} userType={userType} />} />
      <PrivateRoute path='/add-campaign' render={props => <AddCampaign {...props} userType={userType} />} />
      <PrivateRoute path='/org-campaigns/:id' render={props => <Campaign {...props} userType={userType} />} />
      <PrivateRoute path='/org-campaigns/:id/edit' render={props => <EditCampaign {...props} userType={userType} />} />
    </div>
  );
}

export default App;
