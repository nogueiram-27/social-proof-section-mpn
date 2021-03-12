import React from 'react'

import './feedback-item.styles.css'

const FeedbackItem = ({ comment }) => {
    const {name, photoUrl, feedbackComment} = comment
    return(
        <div className='feedback-item-container'>
            <div className='user-info-container'>
                <img src={require('../../assets/'+photoUrl).default} alt='user'/>
                <span>
                    <p className='name'>{name}</p>
                    <p className='verified-buyer'>Verified Buyer</p>
                </span>
            </div>
            <p className='feedback'>"{feedbackComment}"</p>
        </div>
    )
}

export default FeedbackItem