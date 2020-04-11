<template>
<div class="mt-5"> 
    <div class="info-header">  
    </div>
    <div class="row" id="berita">
        <div class="col-lg-12 p-3 mx-2 col-sm-12 mb-2 rounded bg-light">
        <img v-bind:src="news.urlToImage" class="img-fluid mb-4">
          <h1 class="mb-4">            
            {{news.title}}
          </h1>
          <p>{{news.author}} - {{news.source.name}}</p>
          <p>{{news.content}}</p>
          <a target="blank" v-bind:href="news.url">Baca selengkapnya</a>
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
  name: 'Terkini',
  data () {
    return {
      news: []
    }
  },
  mounted () {
    ApiService.getEverythingNews('covid-19')
      .then(response => {
        var news
        news = response.data.articles[this.$route.params.id]
        this.news = news
      })
  }
}
</script>