import { createSelector } from 'reselect'

const selectFeedback = (state) => state.feedback

export const selectFeedbackComments = createSelector(
    [selectFeedback],
    (comments) => comments.comments
)