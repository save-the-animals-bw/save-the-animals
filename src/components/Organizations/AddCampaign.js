import React, { useState } from 'react'
import { connect } from 'react-redux'



function AddCampaign(props) {
    const initialCampaign = {
        title: '',
        location: '',
        species: '',
        urgency: 5,
        image_url: '',
        organization_id: props.user.organ_id,
    }
    console.log(props)
    const [campaign, setCampaign] = useState(initialCampaign)
    return (
        <div>
           <h1>Add A Campaign</h1>
           <form>
               <label htmlFor='title'>Title: <input name='title' type='text' /></label>
               <label htmlFor='location'>Location: <input name='location' type='text' /></label>
               <label htmlFor='species'>Species: <input name='species' type='text' /></label>
               <label htmlFor='urgency'>Urgency: <input name='urgency' type='range' min='1' max='10' initialValue='5' /></label>
               <label htmlFor='image'>Image URL: <input name='image' type='text' /></label>
           </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps, {})(AddCampaign);
