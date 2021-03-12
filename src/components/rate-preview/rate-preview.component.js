import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { rateItemSelector } from '../../redux/rate/rate.selectors'

import RateItem from '../rate-item/rate-item.component'

import './rate-preview.styles.css'

const RatePreview = ({rateItem}) => {
    console.log(rateItem)
    return (
        <div className='rate-preview-container'>
            {
                rateItem.filter((rate, idx) => idx < 3).map((rate) => {
                    return (
                        <div key= {rate.id} className='rate-item'>
                            <RateItem stars={rate.stars} rateSite={rate.site} />
                        </div>
                    )
                })
            }         
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    rateItem: rateItemSelector
})

export default connect(mapStateToProps)(RatePreview)