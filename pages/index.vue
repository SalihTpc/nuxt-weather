<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    "
  >
    <SearchBar />
    <div style="display: flex; align-items: center; justify-content: center">
      <WeatherCard />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'

export default {
  name: 'IndexPage',
  components: { SearchBar, WeatherCard },
}
</script>

<!-- <template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="search"
            label="Şehir Ara"
            @input="handleSearch"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row v-if="loading">
        <v-col>
          <v-progress-linear indeterminate color="primary"></v-progress-linear>
        </v-col>
      </v-row>

      <v-row v-if="results.length > 0">
        <v-col v-for="result in results" :key="result.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ result.name }}</v-card-title>
            <v-card-subtitle>{{
              result.weather[0].description
            }}</v-card-subtitle>
            <v-card-subtitle>{{ result.main.temp }}°C</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { state } from '../store/index'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    results() {
      return this.$store.state.results
    },
  },
  methods: {
    async handleSearch() {
      this.$store.commit('setSearch', this.search)
      await this.$store.dispatch('fetchWeather')
    },
  },
}
</script>

<style scoped>
/* Gerekirse CSS stilleri ekleyebilirsiniz. */
</style> -->
