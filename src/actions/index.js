import axios from "axios";

export const READ_EVENTS = "READ_EVENTS"
export const POST_EVENT = "POST_EVENT"
export const DELETE_EVENT = "DELETE_EVENT"

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

export const deleteEvent = id => async dispatch => {
    console.log('deleteEvent')
    console.log(id)
    await axios.delete(`${ROOT_URL}/events/${id}${QUERY_STRING}`)
    console.log(id)
    dispatch({type: DELETE_EVENT, id})
}