import React from 'react';
import RateItem from '../rate-item/rate-item.component'

import './rate-preview.styles.css'

const RatePreview = () => {
    return (
        <div className='rate-preview-container'>
            
                <div className='rate-item'>
                    <RateItem stars={5} rateSite={'Review'} />
                </div>
                <div className='rate-item'>
                    <RateItem stars={5} rateSite={'Report Guru'} />
                </div>
                <div className='rate-item'>
                    <RateItem stars={5} rateSite={'BestTech'} />
                </div>            
        </div>
    )
}


export default RatePreview