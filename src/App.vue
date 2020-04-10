<template>
  <div id="app">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">      
<div class="container">
  <a class="navbar-brand" href="#">COVID-19</a>      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/#/">Beranda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/berita">Berita</a>
      </li>
    </ul>
    <div class="custom-control custom-switch">
      <input type="checkbox" @click="darkMode()" class="custom-control-input" id="darkSwitch">
      <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
    </div>
        <!-- <b class="btn btn-danger " @click="darkMode()">Dark mode</b> -->
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
[data-theme="dark"] {
    background-color: #111 !important;
    color: #eee;
  }
  [data-theme="dark"] .bg-light {
    background-color: #1d2024 !important;
  }
  [data-theme="dark"] .bg-white {
    background-color: #000 !important;
  }
  [data-theme="dark"] .bg-black {
    background-color: #ededed !important;
  }
  [data-theme="dark"] .navbar-light .navbar-brand{
    color: white !important;
  }
  [data-theme="dark"] .nav-link{
    color: white !important;
  }
body{
  font-family: 'Montserrat', sans-serif;
  background-color: #ededed;
  color: #1d2024;
}
.active > .nav-link {
  border-bottom: 2px solid red;
}
.dark-mode {
background-color: #1d2024;
color: white;
}
.box-news, .info{
  min-height: 100px;  
}
.news-text{
  min-height: 29%;
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
      var darkSwitch = document.getElementById('darkSwitch')
      localStorage.setItem('darkSwitch', 'dark')
      var darkThemeSelected =
        localStorage.getItem('darkSwitch') !== null &&
        localStorage.getItem('darkSwitch') === 'dark'
      darkSwitch.check = darkThemeSelected
        ? document.body.setAttribute('data-theme', 'dark')
        : document.body.removeAttribute('data-theme')
      darkSwitch.addEventListener('change', function (event) {
        if (darkSwitch.checked) {
          document.body.setAttribute('data-theme', 'dark')
          localStorage.setItem('darkSwitch', 'dark')
        } else {
          document.body.removeAttribute('data-theme')
          localStorage.removeItem('darkSwitch')
        }
      })
    }
  }
}
</script>
