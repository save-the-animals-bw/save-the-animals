import React from 'react'
import '../css/CampaignCard.css'

export default function SupporterCampaignCard(props) {
    console.log(props)
    // CLICK ON CARD TO VIEW INDIVIDUAL CAMPAIGN
    const routeToCampaign = (e, item) => {
        e.preventDefault()
        props.history.push(`/supporter-campaigns/${item}`)
    }

    return (
        <div className="card-container" key={props.item.id} onClick={e => routeToCampaign(e, props.item.id)}>
            <div className="card-content">
                <img className='card-image' src={props.item.image_url} />
                <h2>{props.item.title}</h2>
                <p>You're helping {props.item.organization_id} save the {props.item.species}</p>
                <p>Location: {props.item.location}</p>
                <div className={props.item.funding_received < 1000 ? 'funding low-funding' : props.item.funding_received < 5000 ? 'funding mid-funding' : 'funding high-funding'} style={props.item.funding_received < 2000 ? {width: '50px'} : {width:`${props.item.funding_received/25}px`}}>
                <p>{props.item.funding_received}</p>
                </div>
            </div>

        </div>
    )
}

// PROPS ====> title, funding_received, location, urgency, image_url, species, id


