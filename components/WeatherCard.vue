<template>
  <div
    v-if="results.length > 0"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    "
  >
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-overlay :value="error"
      ><v-btn color="success" @click="handleErrorClear">
        City Already exits.
      </v-btn>
    </v-overlay>
    <v-card
      v-for="(item, index) in results"
      :key="index"
      :loading="loading"
      class="mx-auto my-12"
      min-width="250"
      min-height="200"
      color="#26c6da"
      dark
      max-width="400"
      elevation="24"
    >
      <v-img :src="item.weather[0].icon"></v-img>
      <v-card-title>{{ item.name }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <div style="display: flex; align-items: center; justify-content: center">
        <p style="flex: 2; margin: 0.5rem; font-weight: 500">
          {{ item.weather[0].description }}
        </p>
        <div
          style="
            flex: 1;
            display: flex;
            align-items: end;
            justify-content: center;
          "
        >
          <v-icon color="orange" dense>mdi-thermometer</v-icon>
          <span>{{ item.main.temp }}</span>
          <span>
            <v-icon color="orange" style="font-size: inherit"
              >mdi-temperature-celsius</v-icon
            >
          </span>
        </div>
      </div>

      <v-card-actions
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <v-btn
          class="mx-2"
          fab
          small
          text
          color="indigo"
          @click="handleDelete(index)"
        >
          <v-icon color="purple darken-2"> mdi-delete </v-icon>
        </v-btn>

        <v-btn
          class="mx-2"
          fab
          text
          small
          color="indigo"
          @click="handleReload({ name: item.name, id: index })"
        >
          <v-icon dark> mdi-reload </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  data: () => ({}),
  computed: {
    loading() {
      return this.$store.state.loading
    },
    results() {
      return this.$store.state.results
    },
    error() {
      return this.$store.state.error
    },
  },
  methods: {
    async handleReload(payload) {
      await this.$store.dispatch('refetchWeather', payload)
    },
    handleDelete(id) {
      this.$store.commit('removeResult', id)
    },
    handleErrorClear() {
      this.$store.commit('setError', false)
    },
  },
}
</script>
