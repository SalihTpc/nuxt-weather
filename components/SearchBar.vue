<template>
  <div>
    <v-text-field
      v-model="search"
      label="Şehir ara"
      :rules="rules"
      hide-details="auto"
      @keyup.enter="handleSearch()"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => ({
    search: '',
    rules: [(value) => !!value || 'Required.'],
  }),
  methods: {
    async handleSearch() {
      if (this.search) {
        this.$store.commit('setCity', this.search)
        await this.$store.dispatch('fetchWeather')
        this.$store.commit('setCity', '')
        this.search = ''
      } else {
        alert('Şehir boş bırakılamaz...')
      }
    },
  },
}
</script>

<style>
.loading {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
