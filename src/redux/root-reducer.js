import { combineReducers } from 'redux'

import feedbackReducer from './feedback/feedback.reducer'
import rateReducer from './rate/rate.reducer'

const rootReducer = combineReducers({
    feedback: feedbackReducer,
    rate: rateReducer
})

export default rootReducer
