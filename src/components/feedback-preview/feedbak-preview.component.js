import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { selectFeedbackComments } from '../../redux/feedback/feedbak.selectors'

import FeedbackItem from '../feedback-item/feedbak-item.component'

import './feedbak-preview.styles.css'

const FeedbackPreview = ({ comments }) => {
    return (
        <div className='feedback-preview-container'>
        {
            comments.filter((comment, idx) => (idx < 3)).map((comment) => {
                return (
                    <div key={comment.id} className='feedback-item'>
                        <FeedbackItem comment={comment}/>
                    </div>
                )
            })
        } 
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    comments: selectFeedbackComments
})

export default connect(mapStateToProps)(FeedbackPreview)