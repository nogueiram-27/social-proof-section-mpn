import React from 'react'
import { ReactComponent as StarIcon } from '../../assets/icon-star.svg'

import './rate-item.styles.css'

const RateItem = ({ index, stars,  rateSite}) => {
    const starsArray = [0,1,2,3,4]
    for (let star = 0; star < {stars}; star++) {
        starsArray.push(star)
    }
    return(
        <div className={'rate-item-container'}>
            <div className='stars-container'>
                {
                    starsArray.map(item => (<StarIcon key={item} className='star-icon' />))
                }
            </div>
            <p className='rate-container'>Rated {stars} Stars in {rateSite}</p>
        </div>
    )
}

export default RateItem