<template>
  <div class="home">
    <b-container>
      <div class="myApp">
        <News class="news-class" />
        <Sidebar class="sidebar-class" />
      </div>
    </b-container>
  </div>
</template>

<script>
import News from '@/components/News.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    News,
    Sidebar
  }
}
</script>

<style>
.myApp {
  display: flex;
  padding: 20px 0;
}
.news-class {
  flex: 3;
}
.sidebar-class {
  flex: 1;
}
@media (max-width: 767.98px) {
  .myApp{
    flex-direction: column;
  }
}
</style>
