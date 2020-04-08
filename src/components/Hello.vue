<template>
  <div class="hello mt-5">  
    <div class="info-header">        
      <h1>Bersatu melawan COVID-19 mulai dari sekitar kita</h1>  
      <p>Ayo kita lakukan kampanye <span class="text-primary">#DiRumahAja</span> dengan cara berkegiatan dirumah dan meminimalisir kegiatan diluar rumah.</p>
    </div>  
    <h2>Jumlah kasus di Indonesia saat ini</h2>
    <div class="row text-center">      
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded ">
          <h1 class="text-warning">{{konfirmasi}}</h1>
          <p>Terkonfirmasi</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded ">
          <h1 class="text-orange">{{positif}}</h1>
          <p>Positif</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded ">
          <h1 class="text-success">{{sembuh}}</h1>
          <p>Sembuh</p>
        </div>         
              
        <div class="col-sm-12 col-lg pt-3 m-2 info rounded ">
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
        <div class="col-lg p-3 mx-2 col-sm-12 mb-2 rounded box-news">
          <h4 class="mb-4">Mudik Berisiko Tinggi Terpapar Virus Corona Covid-19 - Liputan6.com</h4>
          <p>Ditengah wabah virus corona covid-19 di Indonesia, masyarakat diminta untuk melakukan segala aktivitas dari rumah masing-masing</p>
          <div class="row">
            <div class="col-6">Yoga Sukmana</div>
            <div class="col-6 text-right">2020-04-07</div>
          </div>
        </div>        
        <div class="col-lg p-3 mx-2 col-sm-12 mb-2 rounded box-news">
          <h4 class="mb-4">Mudik Berisiko Tinggi Terpapar Virus Corona Covid-19 - Liputan6.com</h4>
          <p>Ditengah wabah virus corona covid-19 di Indonesia, masyarakat diminta untuk melakukan segala aktivitas dari rumah masing-masing</p>
          <div class="row">
            <div class="col-6">Yoga Sukmana</div>
            <div class="col-6 text-right">2020-04-07</div>
          </div>
        </div>        
      </div>

      <a href="" class="text-primary">Lihat Berita Terkini</a>

    </div>
    <h2>Informasi Pencegahan</h2>
    <div class="mb-3">
      <div class="row">
        <div class="col-sm-12 col-lg m-2 rounded p-3 box-news ">
          <div class="col-lg-12">
          <h4>7 langkah cuci tangan yang benar</h4>
          </div>
        </div>
        <div class="col-sm-12 col-lg m-2 rounded p-3 box-news ">
          <div class="col-lg-12">
          <h4>7 langkah cuci tangan yang benar</h4>
          </div>
        </div>
        <div class="col-sm-12 col-lg m-2 rounded p-3 box-news ">
          <div class="col-lg-12">
          <h4>7 langkah cuci tangan yang benar</h4>
          </div>
        </div>
      </div>
      <a href="" class="text-primary">Lihat Berita Pencegahan</a>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      konfirmasi: '---',
      positif: '---',
      sembuh: '---',
      meninggal: '---',
      update: 'Gagal mengambil data'
    }
  },
  mounted () {
    ApiService.getConfirmed()
      .then(response => {
        const x = response.data.length - 1
        this.konfirmasi = response.data[x].Confirmed
        this.positif = response.data[x].Active
        this.sembuh = response.data[x].Recovered
        this.meninggal = response.data[x].Deaths
        this.update = response.data[x].Date
      })
  }
}
</script>
