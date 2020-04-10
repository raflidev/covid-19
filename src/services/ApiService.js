import Api from '@/services/Api'

export default {
  getConfirmed () {
    return Api.covidApi().get('countries/indonesia')
  },
  getHeadlineNews (q) {
    return Api.newsApi().get('top-headlines?country=id&apiKey=99b705eaee82433ba49ddcd6fc5915fd&q=' + q)
  },
  getEverythingNews (q) {
    return Api.newsApi().get('everything?language=id&apiKey=99b705eaee82433ba49ddcd6fc5915fd&q=' + q)
  }
}
