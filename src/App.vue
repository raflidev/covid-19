<template>
  <div id="app">

    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">      
<div class="container">
  <a class="navbar-brand" href="#">COVID-19</a>      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Beranda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Berita</a>
      </li>
    </ul>
        <b class="btn btn-danger " @click="darkMode()">Dark mode</b>
  </div>
  </div>
</nav>
  <div class="container mt-3">
    <main>
      <router-view></router-view>
    </main>
  </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  background-color: #ededed;
  color: #1d2024;
}
.dark-mode {
background-color: #1d2024;
color: white!important;
}
.box-news, .info{
  min-height: 100px;
  background-color: white;
}
.info-header{
  margin: 6% 0;
  max-width: 65%;
}
.text-orange{
  color : #f78820;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
@media only screen and (max-width: 600px) {
  .info-header{    
    max-width: 100%;
  }
}
</style>
<script>
export default {
  name: 'app',
  methods: {
    darkMode () {
      document.body.classList.toggle('dark-mode')
      document.querySelector('#navbar').classList.toggle('navbar-dark')
      document.querySelector('#navbar').classList.toggle('bg-dark')
      const box = document.querySelectorAll('.box-news')
      for (var i = 0; i < box.length; i++) {
        box[i].classList.toggle('bg-dark')
      }
      const info = document.querySelectorAll('.info')
      for (var x = 0; x < info.length; x++) {
        info[x].classList.toggle('bg-dark')
      }
    }
  }
}
</script>
