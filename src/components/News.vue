<template>
  <div>
    <div class="news-header">
      <h3>Latest News</h3>
      <div class="search-bar">
      <!-- Country -->
        <div>
          <h6>Country:</h6>
          <b-form-select v-model="selectedCountry">
            <option v-for="option in optionsCountry" v-bind:value="option.value" :key="option.id">
              {{ option.text }}
            </option>
          </b-form-select>
        </div>
        <!-- Category -->
        <div>
          <h6>Category:</h6>
          <b-form-select v-model="selectedCategory">
            <option v-for="option in optionsCategory" v-bind:value="option.value" :key="option.id">
              {{ option.text }}
            </option>
          </b-form-select>
        </div>
        <b-button variant="outline-primary" @click="categoryChange">Search...</b-button>
    </div>
    <!-- News -->
    </div>
    <div class="news-list-parent">
    <ul v-for="result of pageOfItems" :key="result.id" class="news-list">
      <li><router-link :to="`@/views/Single/${ result.id }`"><img :src=" result.urlToImage " alt=""></router-link></li>
      <li><strong>{{ result.title }}</strong></li>
      <li style="height:50px; overflow:hidden">{{ result.description }}</li><br>
      <li><a :href="result.url">Read more</a></li>
    </ul>
    </div>
    <div class="jw-pagination">
      <jw-pagination :items="results" :pageSize=6 @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//   import { mapState } from 'vuex'

export default {
    name: 'News',
    data () {
        return {
        results: [],
        pageOfItems: [],
        selectedCountry: 'us',
        optionsCountry: [
            { text: 'USA', value: 'us' },
            { text: 'Australia', value: 'au' },
            { text: 'India', value: 'in' },
            { text: 'Russia', value: 'ru' },
            { text: 'France', value: 'fr' },
            { text: 'United Kingdom	', value: 'gb' }
        ],
        selectedCategory: 'general',
        optionsCategory: [
            { text: 'General', value: 'general' },
            { text: 'Business', value: 'business' },
            { text: 'Entertainment', value: 'entertainment' },
            { text: 'Health', value: 'health' },
            { text: 'Science', value: 'science' },
            { text: 'Sports', value: 'sports' },
            { text: 'Technology	', value: 'technology' }
        ]
        }
    },
    methods: {
            onChangePage (pageOfItems) {
            //   update page of items
            this.pageOfItems = pageOfItems
            },
            //  OVDE POZIVA NA DUGME PO KATEGORIJI I ZEMLJI
            async categoryChange () {
            try {
            const res = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${this.selectedCategory}/${this.selectedCountry}.json`)

            const resultsFirst = res.data.articles
            let i = 0
                resultsFirst.map(n => {
                n.id = i
                i++
                })
            this.results = resultsFirst
            } catch (e) {
            console.error(e)
            }
            }
    },
    // computed: {
    //     ...mapState([
    //         'data.stateResults'
    //     ])
    // },

    //  OVDE POZIVA KAD SE UCITA STRANICA
    async created () {
        try {
        const res = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/general/us.json')

        const resultsFirst = res.data.articles
        let i = 0
            resultsFirst.map(n => {
            n.id = i
            i++
            })
        this.results = resultsFirst
        } catch (e) {
        console.error(e)
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
img {
  width: 100%;
  height: 200px;
}
.news-header{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 30px;
}
.news-list{
  box-sizing: border-box;
  min-height: 350px;
  width: 48%;
  margin: 1%;
  padding: 0;
}
.news-list-parent{
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}
.search-bar{
  display: flex;
}
.jw-pagination{
  text-align: center;
}
</style>
