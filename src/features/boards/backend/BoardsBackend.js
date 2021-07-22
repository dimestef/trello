import BaseBackend from '../../../backend/BaseBackend'

class BoardsBackend extends BaseBackend {
  constructor() {
    super()
  }

  getMyBoards() {
    return this.get('/1/members/me/boards')
  }

  getBoardLists(id) {
    return this.get(`/1/boards/${id}/lists`)
  }

  getBoardListCards(id) {
    return this.get(`1/lists/${id}/cards`)
  }

  getBoardListCardComments(id) {
    return this.get(`1/cards/${id}/actions`)
  }

  archiveBoardListCards(id) {
    return this.post(`1/lists/${id}/archiveAllCards`)
  }

  createCard(payload) {
    return this.post('1/cards', payload)
  }

  updateBoardList(id, payload) {
    return this.put(`1/lists/${id}`, payload)
  }

  deleteBoardById(id) {
    return this.delete(`/1/boards/${id}`)
  }
}

export default new BoardsBackend()
