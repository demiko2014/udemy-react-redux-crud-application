import axios from "axios";

export const READ_EVENTS = "READ_EVENTS"
export const POST_EVENT = "POST_EVENT"

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERY_STRING = "?token=token123"

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`)
//    console.log(response)
    dispatch({type: READ_EVENTS, response})
}

export const postEvent = values => async dispatch => {
    console.log('postEvent')
    const response = await axios.post(`${ROOT_URL}/events${QUERY_STRING}`, values)
    console.log(response)
    dispatch({type: POST_EVENT, response})
}