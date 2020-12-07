<template>
    <div
      id="app"
      :class="
        typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
      "
    >
      <main>
        <div class="search-box">
          <input
            type="text"
            class="search-bar"
            placeholder="Search..."
            v-model="query"
            @keypress="fetchWeather"
          />
        </div>

        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="location">
              {{ weather.name }}, {{ weather.sys.country }}
            </div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>

          <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      api_key: '317fd476a3801edf2e8d1ad094be7e47',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather (e) {
      if (e.key === 'Enter') {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then(res => {
            return res.json()
          })
          .then(this.setResults)
      }
    },
    setResults (results) {
      this.weather = results
    },
    dateBuilder () {
      const d = new Date()
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`
    }
  },
  created () {
    fetch(
      `${this.url_base}weather?q=Belgrade&units=metric&appid=${this.api_key}`
    )
      .then(res => {
        return res.json()
      })
      .then(this.setResults)
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
#app {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  max-height: 400px;
  width: 100%;
  margin-bottom: 20px;
}
#app.warm {
  background-image: url("../assets/warm-bg.jpg");
}
main {
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
  overflow: hidden;
  max-height: 400px;
}
.search-box {
  width: 100%;
  margin-bottom: 15px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 10px;
  color: #313131;
  font-size: 16px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 7px 18px;
  color: #fff;
  font-size: 55px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 20px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
