import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../../actions'
import axiosWithAuth from '../../utils/axiosWithAuth'



function AddCampaign(props) {

    useEffect(() => {
        props.getUser()
    }, [])

    const initialCampaign = {
        title: '',
        location: '',
        species: '',
        urgency: 5,
        image_url: '',
        organization_id: parseInt(props.user.organ_id, 10),
    }
    const [campaign, setCampaign] = useState(initialCampaign)

    const handleChanges = e => {
        let value = e.target.value
        if (e.target.name === 'urgency'){
            setCampaign({
                ...campaign,
                urgency: parseInt(value, 10)
            })
        } else {
        setCampaign({
            ...campaign,
            [e.target.name] : value
        })
        }
    }

    const handleSubmit = e => {
        axiosWithAuth()
        .post('https://saving-the-animals.herokuapp.com/api/campaigns', campaign)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
          
           <form onSubmit={handleSubmit}>
           <h1>Add A Campaign</h1>
               <label htmlFor='title'>Title: <input name='title' type='text' onChange={handleChanges} /></label>
               <label htmlFor='location'>Location: <input name='location' type='text' onChange={handleChanges} /></label>
               <label htmlFor='species'>Species: <input name='species' type='text' onChange={handleChanges}/></label>
               <label htmlFor='urgency'>Urgency: <input name='urgency' type='range' min='0' max='10' defaultValue='5' onChange={handleChanges}/></label>
               <label htmlFor='image'>Image URL: <input name='image' type='text' onChange={handleChanges}/></label>
               <button type="submit">Add Campaign</button>
           </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps, { getUser })(AddCampaign);
