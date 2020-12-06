<template>
  <div class="home">
    <b-container>
      <div class="myApp">
        <News class="news-class"/>
        <Weather class="weather-class"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import News from '@/components/News.vue'
import Weather from '@/components/Weather.vue'

export default {
  name: 'Home',
  components: {
    News,
    Weather
  }
}
</script>

<style>

.myApp{
  display: flex;

}
.news-class{
  flex: 7;
}
.weather-class{
  flex: 3;
}


</style>
