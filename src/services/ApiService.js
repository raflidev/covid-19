import Api from '@/services/Api'

export default {
  getConfirmed () {
    return Api.covidApi().get('/live/country/indonesia/status/confirmed')
  }
}
