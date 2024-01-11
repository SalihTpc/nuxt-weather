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
