<template>
<div class="mt-5"> 
    <div class="info-header">   
        <h1>Berita Terkini</h1>
        <p>Kamu bisa pilih beberapa topik</p>
        <div @click="getNews('pencegahan corona')" class="btn btn-sm btn-warning">Pencegahan Corona</div>
        <div @click="getNews('covid-19')" class="btn btn-sm btn-danger">COVID-19</div>
        <div @click="getNews('tips pencegahan covid-19')" class="btn btn-sm btn-info">Tips Pencegahan</div>
    </div>
    <hr>
    {{$route.params.id}}
    <div class="row" id="berita">
        <div class="col-lg-12 p-3 mx-2 col-sm-12 mb-2 rounded box-news bg-light" v-for="(news, index) in news" :key="news.id">
          <h4 class="mb-4">
            <a class="text-dark" v-bind:href="'#/berita/terkini/content/'+desc+'/'+index">
            {{news.title}}
            </a>
          </h4>
          <p>{{news.description}}</p>     
        </div>  
    </div>
</div>
</template>
<style>
#berita .box-news{
    height: 140px;
}
</style>
<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'berita',
  data () {
    return {
      desc: null,
      news: []
    }
  },
  methods: {
    async getNews (q) {
      await ApiService.getEverythingNews(q)
        .then(response => {
          var news = []
          for (let i = 0; i < response.data.articles.length; i++) {
            news[i] = response.data.articles[i]
          }
          this.news = news
          this.desc = q
        })
    }
  }
}
</script>