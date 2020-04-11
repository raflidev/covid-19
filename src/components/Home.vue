<template>
  <div class="mt-5">  
    <div class="info-header">          
      <h1>Bersatu melawan COVID-19 mulai dari sekitar kita</h1>  
      <p>Ayo kita lakukan kampanye <span class="text-primary">#DiRumahAja</span> dengan cara berkegiatan dirumah dan meminimalisir kegiatan diluar rumah.</p>
    </div>  
    <h2>Jumlah kasus di Indonesia saat ini</h2>
    <div class="row text-center">      
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded bg-light">
          <h1 class="text-warning">{{konfirmasi}}</h1>
          <p>Terkonfirmasi</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded bg-light">
          <h1 class="text-orange">{{positif}}</h1>
          <p>Positif</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded bg-light">
          <h1 class="text-success">{{sembuh}}</h1>
          <p>Sembuh</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded bg-light">
          <h1 class="text-danger">{{meninggal}}</h1>
          <p>Meninggal</p>
        </div>                                 
    </div>
    <div>
      <span class="text-muted">Perubahan terakhir</span>
      <p>{{update}}</p>
    </div> 
    <h2>Informasi terkini</h2>   
    <div class="my-4 mb-2">
      <div class="row">    

        <div class="col-lg p-3 mx-2 col-sm-12 mb-2 rounded box-news bg-light" v-for="(news, index) in news" :key="news.id">
          <h4 class="mb-4 news-text">
            <a class="text-dark" v-bind:href="'#/berita/terkini/'+index">
            {{news.title}}
            </a>
          </h4>
          <p>{{news.description}}</p>
          <div class="row">            
            <div class="col-6">{{news.author}}</div>
            <div class="col-6 text-right">{{news.publishedAt}}</div>
          </div>
        </div>                   
      </div>

    </div>
    <h2>Informasi Tips</h2>
    <div class="mb-3">
      <div class="row">
        <div class="col-sm-12 col-lg m-2 pt-3 rounded py-2 box-news bg-light" v-for="(tipsNews, index) in tipsNews" :key="tipsNews.id">          
          <h5>
            <a class="text-dark" v-bind:href="'#/berita/tips/'+index">{{tipsNews.title}}</a>
            </h5>  
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from '@/services/ApiService'
import moment from 'moment'
export default {
  name: 'Home',
  data () {
    return {
      konfirmasi: '---',
      positif: '---',
      sembuh: '---',
      meninggal: '---',
      update: 'Gagal mengambil data',
      tipsNews: [],
      news: []
    }
  },
  head: {
    title: function () {
      return {
        inner: '#diRumahAja'
      }
    },
    meta: [
      { name: 'description', content: 'My description', id: 'desc' },
      { name: 'dicoding:email', content: 'rafliramdhn@gmail.com' }
    ]
  },
  mounted () {
    ApiService.getConfirmed()
      .then(response => {
        this.konfirmasi = response.data.cases
        this.positif = response.data.active
        this.sembuh = response.data.recovered
        this.meninggal = response.data.deaths
        this.update = moment(response.data.updated).format('LLLL')
      })
    ApiService.getEverythingNews('covid-19')
      .then(response => {
        var news = []
        for (let i = 0; i < 2; i++) {
          news[i] = response.data.articles[i]
        }
        this.news = news
      })
    ApiService.getEverythingNews('tips pencegahan covid-19')
      .then(response => {
        var tipsNews = []
        for (let i = 0; i < 3; i++) {
          tipsNews[i] = response.data.articles[i]
        }
        this.tipsNews = tipsNews
      })
  }
}
</script>
