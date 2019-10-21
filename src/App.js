import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

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
  return (
    <div className="App">
      <Route path='/' component={Landing} />
      <Route path='/register' component={Register} />
      <Route path='/org-login' component={OrgLogin} />
      <Route path='/supporter-login' component={SupporterLogin} />
      {/* SUPPORTER PRIVATE ROUTES */}
      <PrivateRoute path='/supporter-campaigns' component={SupporterLanding} />
      <PrivateRoute path='/supporter-campaigns/:id' render={(props) => <SupportCampaign {...props} />} />
      <PrivateRoute path='/supporter-campaigns/:id/donate' render={(props) => <Donate {...props} />} />
      {/* ORGANIZATION PRIVATE ROUTES*/}
      <PrivateRoute path='/org-campaigns' component={OrgLanding} />
      <PrivateRoute path='/add-campaign' component={AddCampaign} />
      <PrivateRoute path='/org-campaigns/:id' render={props => <Campaign {...props} />} />
      <PrivateRoute path='/org-campaigns/:id/edit' render={props => <EditCampaign {...props} />} />
    </div>
  );
}

export default App;
