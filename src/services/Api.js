import axios from 'axios'

export default {
  covidApi () {
    return axios.create({
      baseURL: 'https://api.covid19api.com/'
    })
  },
  newsApi () {
    return axios.create({
      baseURL: 'https://newsapi.org/v2/'
    })
  }
}
