import {SET_MESSAGE} from '../types/message';
import intersperse from 'intersperse'

export const setSwedishMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SET_MESSAGE,
            payload: {
                message: intersperse(message, 'f')
            }
        })
    }
}