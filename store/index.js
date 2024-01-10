import axios from 'axios'

function capitalizeWords(inputString) {
  return inputString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const state = () => ({
  city: '',
  loading: false,
  results: [],
  error: false,
})

export const mutations = {
  setCity(state, city) {
    state.city = city
  },
  setResults(state, result) {
    state.results = [result, ...state.results]
  },
  changeResults(state, payload) {
    state.results[payload.id] = payload.result
  },
  removeResult(state, index) {
    state.results.splice(index, 1)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, status) {
    state.error = status
  },
}

export const actions = {
  async fetchWeather({ commit, state }) {
    if (
      !state.results
        .map((result) => {
          return result.name.toLowerCase()
        })
        .includes(state.city.toLowerCase())
    ) {
      try {
        commit('setLoading', true)
        const res = await axios.get(
          process.env.baseUrl +
            'weather?q=' +
            state.city.toLowerCase() +
            '&appid=' +
            process.env.apiKey +
            '&units=metric&lang=tr'
        )
        res.data.weather[0].icon =
          'https://openweathermap.org/img/wn/' +
          res.data.weather[0].icon +
          '@2x.png'
        res.data.weather[0].description = capitalizeWords(
          res.data.weather[0].description
        )
        commit('setResults', res.data)
        commit('setLoading', false)
      } catch (error) {
        console.error('Hava durumu getirme hatası:', error)
        commit('setLoading', false)
      }
    } else {
      commit('setError')
    }
  },
  async refetchWeather({ commit }, payload) {
    try {
      commit('setLoading', true)
      const res = await axios.get(
        process.env.baseUrl +
          'weather?q=' +
          payload.name +
          '&appid=' +
          process.env.apiKey +
          '&units=metric&lang=tr'
      )
      res.data.weather[0].icon =
        'https://openweathermap.org/img/wn/' +
        res.data.weather[0].icon +
        '@2x.png'
      res.data.weather[0].description = capitalizeWords(
        res.data.weather[0].description
      )
      commit('changeResults', { result: res.data, id: payload.id })
      commit('setLoading', false)
    } catch (error) {
      console.error('Hava durumu getirme hatası:', error)
      commit('setLoading', false)
    }
  },
}
