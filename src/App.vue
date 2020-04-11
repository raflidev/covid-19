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
        <router-link tag="li" class="nav-item" active-class="active" to="/home"><a class="nav-link">Beranda</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/berita"><a class="nav-link">Berita</a></router-link>   
    </ul>
    <div class="custom-control custom-switch">
      <input type="checkbox" @click="darkMode()" class="custom-control-input" id="darkSwitch">
      <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
    </div>
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
  font-family: 'Montserrat', sans-serif!important;
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
