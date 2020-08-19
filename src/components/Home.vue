<template>
  <div class='mt-5'>
    <div class='info-header'>
      <h1>Bersatu melawan COVID-19 mulai dari sekitar kita</h1>
      <p>
        Ayo kita lakukan kampanye
        <span class='text-primary'>#DiRumahAja</span> dengan cara berkegiatan
        dirumah dan meminimalisir kegiatan diluar rumah.
      </p>
    </div>
    <h2>Jumlah kasus di Indonesia saat ini</h2>
    <div class='row text-center'>
      <div class='col-sm-12 col-lg pt-3 m-2 info rounded bg-light'>
        <h1 class='text-warning'>{{ konfirmasi }}</h1>
        <p>Terkonfirmasi</p>
      </div>

      <div class='col-sm-12 col-lg pt-3 m-2 info rounded bg-light'>
        <h1 class='text-orange'>{{ positif }}</h1>
        <p>Dalam Perawatan</p>
      </div>

      <div class='col-sm-12 col-lg pt-3 m-2 info rounded bg-light'>
        <h1 class='text-success'>{{ sembuh }}</h1>
        <p>Sembuh</p>
      </div>

      <div class='col-sm-12 col-lg pt-3 m-2 info rounded bg-light'>
        <h1 class='text-danger'>{{ meninggal }}</h1>
        <p>Meninggal</p>
      </div>
    </div>
    <div>
      <span class='text-muted'>Perubahan terakhir</span>
      <p>{{ update }}</p>
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
      update: 'Gagal mengambil data'
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
    ApiService.getConfirmed().then(response => {
      this.konfirmasi = response.data.cases
      this.positif = response.data.active
      this.sembuh = response.data.recovered
      this.meninggal = response.data.deaths
      this.update = moment(response.data.updated).format('LLLL')
    })
  }
}
</script>
