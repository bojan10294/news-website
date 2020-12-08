<template>
  <div>
    <b-navbar style="background: #93bd32 !important" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">VueNews</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">News</b-nav-item>
          <b-nav-item href="#">Gadgets</b-nav-item>
          <b-nav-item href="#">Videos</b-nav-item>
          <b-nav-item href="#">Reviews</b-nav-item>
          <b-nav-item href="#">Contact us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto nav-right">
          <i style="transform: rotate(45deg);" class="fas fa-wifi"></i>
          <i class="fab fa-android"></i>
          <i class="fab fa-apple"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="header">
      <img src="../assets/settings_logo.png" alt="" />
      <h4>Blog</h4>
      <p>We make digital business simple</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.nav-right{
   i {
    font-size: 17px;
    color:#fff;
    margin-right: 10px;
  }
}
.navbar-brand {
  font-weight: 700 !important;
}
.bg-info {
  background-color: #93bd32 !important;
  padding: 12px 50px !important;
}
.nav-link {
  color: #fff !important;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
}
.header {
  background: #edeff2;
  display: flex;
  align-items: center;
  padding: 30px 150px;

  img {
    background-color: #93bd32 !important;
    border-radius: 50%;
    padding: 5px;
    width: 35px;
    height: 35px;
  }
  h4 {
    margin: 0 10px;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: grey;
    margin-top: 4px;
  }
}
@media (max-width: 980px) {
  .nav-right{
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
    margin-top: 10px;
  }
 }
 @media (max-width: 767px) {
   .header{
    padding: 20px 15px;
    flex-direction: column;
   }
 }
</style>
