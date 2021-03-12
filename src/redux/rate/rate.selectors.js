import { createSelector } from 'reselect'

const rateSelector = (state) => state.rate

export const rateItemSelector = createSelector(
    [rateSelector],
    (rate) => rate.rate
)