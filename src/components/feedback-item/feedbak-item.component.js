import React from 'react'

import './feedback-item.styles.css'

const FeedbackItem = ({ photoUrl, name, feedbackMessage }) => {
    return(
        <div className='feedback-item-container'>
            <div className='user-info-container'>
                <img src={require('../../assets/image-colton.jpg').default} alt='user'/>
                <span>
                    <p className='name'>Colton Smith</p>
                    <p className='verified-buyer'>Verified Buyer</p>
                </span>
            </div>
            <p className='feedback'>
            "We needed the same printed design as the one we had ordered a weeok prior. Not only did they find the original order, but we also received it in time. Excellent!"
            </p>
        </div>
    )
}

export default FeedbackItem