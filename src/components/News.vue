<template>
  <div>
    <div class="news-header">
      <h3>Latest News</h3>
      <div class="search-bar">
        <!-- Country -->
        <div>
          <h6>Country:</h6>
          <b-form-select v-model="selectedCountry">
            <option
              v-for="(option, i) in optionsCountry"
              v-bind:value="option.value"
              :key="i"
            >
              {{ option.text }}
            </option>
          </b-form-select>
        </div>
        <!-- Category -->
        <div>
          <h6>Category:</h6>
          <b-form-select v-model="selectedCategory">
            <option
              v-for="(option, i) in optionsCategory"
              v-bind:value="option.value"
              :key="i"
            >
              {{ option.text }}
            </option>
          </b-form-select>
        </div>
        <b-button variant="outline-primary" @click="categoryChange"
        class="search-btn"
          >Search...</b-button
        >
      </div>
      <!-- News -->
    </div>
    <div class="news-list-parent">
      <ul v-for="result of pageOfItems" :key="result.id" class="news-list">
        <li>
          <img
            @click="storeAndRedirect(result)"
            :src="result.urlToImage"
            alt=""
          />
        </li>
        <li
          @click="storeAndRedirect(result)"
          :src="result.urlToImage"
          class="title"
        >
          <strong>{{ result.title.substring(0, 60) + "..." }}</strong>
        </li>
        <li>{{ result.description.substring(0, 100) + "..." }}</li>
        <li><a :href="result.url" target="_blank">Read more ></a></li>
      </ul>
    </div>
    <div class="jw-pagination">
      <jw-pagination
        :items="results"
        :pageSize="6"
        :disableDefaultStyles="true"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

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
    ...mapActions(['storeNewsItem', 'storeCategoryAndCountry']),
    storeAndRedirect (item) {
      this.storeNewsItem(item)
        .then(() => {
          this.$router.push(`/single/${item.id}`)
        })
        .catch(e => alert('something went wrong!'))
    },
    onChangePage (pageOfItems) {
      //   update page of items
      this.pageOfItems = pageOfItems
    },
    //  OVDE POZIVA NA DUGME PO KATEGORIJI I ZEMLJI
    async categoryChange () {
      this.storeCategoryAndCountry({
        category: this.selectedCategory,
        country: this.selectedCountry
      })
      try {
        const res = await axios.get(
          `https://saurav.tech/NewsAPI/top-headlines/category/${this.selectedCategory}/${this.selectedCountry}.json`
        )

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
    computed: {
      ...mapState(['currentCategoryAndCountry'])
    },

  //  OVDE POZIVA KAD SE UCITA STRANICA
  async created () {
    let category = 'general'
    let country = 'us'

    if (this.currentCategoryAndCountry && this.currentCategoryAndCountry.category) {
      this.selectedCategory = this.currentCategoryAndCountry.category
      category = this.selectedCategory
    }
    if (this.currentCategoryAndCountry && this.currentCategoryAndCountry.country) {
      this.selectedCountry = this.currentCategoryAndCountry.country
      country = this.selectedCountry
    }

    try {
      const res = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
      )

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
<style lang="scss" scoped>
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
  &.title:hover {
    cursor: pointer;
  }
}
a {
  color: #42b983;
}
img {
  width: 100%;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
}
.news-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 30px;
}
.news-list {
  box-sizing: border-box;
  min-height: 350px;
  width: 48%;
  margin: 1%;
  padding: 0;
  text-align: left;
}
.news-list-parent {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}
.search-bar {
  display: flex;
  text-align: left;
  align-items: flex-end;
}
.custom-select {
  margin-right: 15px;
  width: 160px !important;
}
.search-btn{
  background-color: #93bd32 !important;
  border: 1px solid #93bd32;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  height: 38px;
  &:hover{
  background-color: #749626 !important;
  border: #749626 solid 1px;
  }
.jw-pagination{
  margin: 50px;
}
}
</style>
