import BoardsBackend from '../backend/BoardsBackend'

export const getMyBoards = () => {
    return BoardsBackend.getMyBoards()
}

export const getBoardLists = async id => {
    const response = await BoardsBackend.getBoardLists(id)
    return response.data
}

export const getBoardListCards = async id => {
    const response = await BoardsBackend.getBoardListCards(id)
    return response.data
}

export const getBoardListCardComments = async id => {
    const response = await BoardsBackend.getBoardListCardComments(id)
    return response.data
}

export const deleteBoardById = (id) => {
    return BoardsBackend.deleteBoardById(id)
}

export const archiveBoardListCards = (id) => {
    return BoardsBackend.archiveBoardListCards(id)
}

export const updateBoardList = (id, payload) => {
    return BoardsBackend.updateBoardList(id, payload)
}

export const createCard = (id, payload) => {
    return BoardsBackend.createCard(id, payload)
}

export default {
    getMyBoards,
    getBoardLists,
    getBoardListCards,
    getBoardListCardComments,
    deleteBoardById,
    archiveBoardListCards,
    updateBoardList,
    createCard
}
