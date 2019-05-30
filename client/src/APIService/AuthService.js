export default {
  register(body) {
    return this.$http.post('/authentication/create', body)
  }
}