import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT, GET_EVENT, PUT_EVENT, POST_EVENT } from '../actions'
//import events_index from '../components/events_index';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(action.response.data)
            console.log(_.mapKeys(action.response.data, "id"))
            return _.mapKeys(action.response.data, "id")
        case GET_EVENT:
        case PUT_EVENT:
        case POST_EVENT:
            console.log(action)
            const data = action.response.data
            return { ...events, [data.id]: data}
        
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}