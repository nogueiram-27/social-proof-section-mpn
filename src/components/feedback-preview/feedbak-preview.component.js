import React from 'react'
import FeedbackItem from '../feedback-item/feedbak-item.component'

import './feedbak-preview.styles.css'

const FeedbackPreview = () => {
    return (
        <div className='feedback-preview-container'>
            <div className='feedback-item'>
                <FeedbackItem />
            </div>
            <div className='feedback-item'>
                <FeedbackItem />
            </div>
            <div className='feedback-item'>
                <FeedbackItem />
            </div>   
        </div>
    )
}

export default FeedbackPreview