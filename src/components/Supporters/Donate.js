import React, { useState } from 'react'
import { connect } from 'react-redux'
import axiosWithAuth from '../../utils/axiosWithAuth'

function Donate(props) {
    console.log('donate props', props)
    const initialItem = {
        ...props.item
    }
    const [donation, setDonation] = useState(initialItem)

    const handleChanges = e => {
        let value = e.target.value
        setDonation({
            ...donation,
            funding_received: props.item.funding_received + parseInt(e.target.value, 10)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(donation)
        axiosWithAuth()
        .put(`https://saving-the-animals.herokuapp.com/api/campaigns/${props.item.id}`, donation)
        .then(res => {
            console.log(res)
            props.history.push('/supporter-campaigns')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='funding_received'>Amount: $
                <input type='text' name='funding_received' onChange={handleChanges} /></label>
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
