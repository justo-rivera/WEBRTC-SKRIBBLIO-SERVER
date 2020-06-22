const RoomModel = require('../models/Room.model')
const ClientModel = require('../models/Client.model')

const updateRoom = (roomName, clientId, changeLeader) => {
    const updateQuery = {$push: {clients: clientId}}
    if(changeLeader) updateQuery.$set = {leader: clientId}
    console.log(updateQuery,changeLeader)
    return RoomModel.findOneAndUpdate({name: roomName}, updateQuery, {new: true, upsert: true})
}
const createClient = (clientName, socket) => {
    const pattern = `/${clientName}/`
    ClientModel.count({name: pattern})
        .then( (sameNames) => {
            if(sameNames>0) clientName+=sameNames
            return ClientModel.create({name: clientName, socket})
        }
        )
        .catch( err => console.error(err))
}
    

module.exports = { updateRoom, createClient }