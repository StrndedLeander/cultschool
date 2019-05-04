import API from './APIService'

export default {
  async login(body) {
    return API().post('/authentication', body)
  },
  register(body) {
    return API().get('/authentication', body)
  }
}