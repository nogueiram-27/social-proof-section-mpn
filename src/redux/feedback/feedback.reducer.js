const INITIAL_STATE = {
    comments: [
        {
            id:1,
            name: 'Colton Smith',
            photoUrl: 'image-colton.jpg',
            feedbackComment: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'
        },
        {
            id:2,
            name: 'Irene Roberts',
            photoUrl: 'image-irene.jpg',
            feedbackComment: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'
        },
        {
            id: 3,
            name: 'Anne Wallace',
            photoUrl: 'image-anne.jpg',
            feedbackComment: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'
        },
    ]
}

const feedbackReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default feedbackReducer