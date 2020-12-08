<template>
    <b-container>
      <div class="single">
        <h1> {{ currentNewsItem.title }}</h1>
        <img :src="currentNewsItem.urlToImage" alt="">
        <h4>Author: {{ currentNewsItem.author }}</h4>
        <p v-if="currentNewsItem.content">Content {{ currentNewsItem.content }}</p>
        <router-link class="go-back" to="/">&#60; Go Back</router-link>
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
    margin-right: 20px;
    color: #93bd32;
    text-decoration: none;
    &:hover{
      font-weight: 500;
    }
  }
  a{
    color: #93bd32;
    text-decoration: none;
    &:hover{
    font-weight: 500;
    text-decoration: none;
    color: #93bd32;
    }
  }
}
@media (max-width: 767.98px) {
  .single{
    h1{
      font-size: 20px;
    }
    h4{
      font-size: 18px;
    }
    img{
      max-width: 90vw;
    }
  }
}
</style>
