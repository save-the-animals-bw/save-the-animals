import React, { useEffect } from 'react'

import { getUser } from '../../actions'
import { connect } from 'react-redux'

function Campaign(props) {

    useEffect(() => {
        props.getUser()
    }, [])

    return (
        <div>
            <h1>This is Campaign</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        campaigns: state.campaigns
    }
}

export default connect(mapStateToProps, { getUser })(Campaign)
