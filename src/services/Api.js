import axios from 'axios'

export default {
  covidApi () {
    return axios.create({
      baseURL: 'https://corona.lmao.ninja/v2/'
    })
  }
}
