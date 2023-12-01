import { api } from "./api.js"

const dataEndpoints = {
    getAll: "data/events?sortBy=_createdOn%20desc",
    singleEvent: "data/events/"

}

async function getAllEvents () {
    return api.get(dataEndpoints.getAll)
}

async function getSingleEvent(id){
    return api.get(dataEndpoints.singleEvent + id)
}

async function createEvent(data){
    return api.post(dataEndpoints.singleEvent, data)
}

async function updateEvent(id, data){
    return api.put(dataEndpoints.singleEvent + id, data)
}

async function delEvent(id) {
    return api.del(dataEndpoints.singleEvent + id)
}

// async function search(query){
//     return api.get(`data/fruits?where=name%20LIKE%20%22${query}%22`)
// }

export const dataService = {
    getAllEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    delEvent
}