<template>
    <b-container>
      <div class="single">
        <h1> {{ currentNewsItem.title }}</h1>
        <img :src="currentNewsItem.urlToImage" alt="">
        <h4>Author: {{ currentNewsItem.author }}</h4>
        <p v-if="currentNewsItem.content">Content {{ currentNewsItem.content }}</p>
        <router-link class="go-back" to="/"> Go Back</router-link>
        <a :href="currentNewsItem.url" target="_blank">Read more ></a>
      </div>
    </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'News',
  computed: {
    ...mapState(['currentNewsItem'])
  },
  created () {
    // this.currentNewsItem is everything needed for this page
    console.log(this.currentNewsItem)
  }
}
</script>

<style lang="scss">
.single{
  text-align: left;
  padding: 40px 0;
  h1{
    max-width: 600px;
    font-size: 25px;
    margin-bottom: 15px;
  }
  p{
    max-width: 700px;
  }
  img{
    object-fit: cover;
    max-width: 600px;
    margin-bottom: 15px;
  }
  .go-back{
    margin-right: 10px;
  }
}
</style>
