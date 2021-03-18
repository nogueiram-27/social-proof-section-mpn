import React from 'react'
import './rate-item.styles.css'

const RateItem = ({ index, stars,  rateSite}) => {
    const starsArray = [0,1,2,3,4]
    for (let star = 0; star < {stars}; star++) {
        starsArray.push(star)
    }
    return(
        <div className={'rate-item-container'}>
            {
                starsArray.map(item => (<img className='star-icon' src={require('../../assets/icon-star.svg').default} alt='star' />))
            }
            <p>Rated {stars} Stars in {rateSite}</p>
        </div>
    )
}

export default RateItem