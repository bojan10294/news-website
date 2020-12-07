<template>
  <div class="single">
    <h1>Author {{ currentNewsItem.author }}</h1>
    <h1>Content {{ currentNewsItem.content }}</h1>
    <h1>Description {{ currentNewsItem.description }}</h1>
    <h1>This is an single page</h1>
    <h1>This is an single page</h1>
  </div>
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
