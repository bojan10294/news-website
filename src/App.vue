<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.jw-pagination {
  ul {
    display: flex;
    justify-content: center;
    li{
    a {
      cursor: pointer;
      color:#989898;
      margin-right: 5px;
      border: 0;
      background-color:#ECEEF1;
      font-weight: 700;
      font-size: 14px;
      &:hover{
        color:#93bd32;
      }
      &:active {
        background-color: #93bd32 !important;
        border-color: #93bd32 !important;
      }
    }
    &.active a{
        background-color: #93bd32 !important;
        border-color: #93bd32 !important;
      }
    }
  }
}
</style>
