import React, { useState } from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../../utils/axiosWithAuth'

function Donate(props) {

    const initialItem = {
        donation_name: '',
        amount_need: 0,
        campaign_id: parseInt(props.item.id, 10),
        id: parseInt(props.item.id, 10)
    }
    const [donation, setDonation] = useState(initialItem)

    const handleChanges = e => {
        let value = e.target.value
        if (e.target.name === 'amount_need'){
            setDonation({
                ...donation,
                [e.target.name] : parseInt(value, 10)
            })
        } else {
            setDonation({
                ...donation,
                [e.target.name] : e.target.value
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(donation)
        axiosWithAuth()
        .put(`https://saving-the-animals.herokuapp.com/api/fundings/${props.item.id}`, donation)
        .then(res => {
            console.log(res)
            props.history.push('supporter-campaigns')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor='donation_name'>Message: 
                <input type='text' name='donation_name' onChange={handleChanges} /></label>
                <label htmlFor='amount_need'>Amount: 
                <input type='text' name='amount_need' onChange={handleChanges} /></label>
                <button type='submit'>Submit Donation</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        item: state.itemToDonate
    }
}

export default connect(mapStateToProps, {})(Donate)
