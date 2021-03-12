const INITIAL_STATE = {
    rate: [
        {
            id: 1,
            site: 'Review',
            starts: 5
        },
        {
            id: 2,
            site: 'Report Guru',
            starts: 5
        },
        {
            id: 3,
            site: 'BestTech',
            starts: 5
        }
    ]
}

const rateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default rateReducer