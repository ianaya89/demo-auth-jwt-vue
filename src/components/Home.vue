<template>
  <div>
    <top-bar></top-bar>

    <div class="container">
      <h1 class="title">Inicio</h1>

      <div class="content">
        <h2 class="subtitle">
          Estado de la API
          <span @click="getStatus">♻️</span>
        </h2>
        <pre>
          <code>
            {{ apiStatus }}
          </code>
        </pre>
      </div>

      <div class="content">
        <h2 class="subtitle">
          Estado del Token
          <span @click="checkToken">♻️</span>
        </h2>
        <pre>
          <code>
            {{ tokenStatus }}
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/layout/TopBar.vue'
import api from '@/api'

export default {
  name: 'home',

  components: { TopBar },

  data () {
    return {
      user: JSON.parse(window.localStorage.user),
      apiStatus: {},
      tokenStatus: ''
    }
  },

  created () {
    this.getStatus()
    this.checkToken()
  },

  methods: {
    getStatus () {
      api.getStatus()
        .then(apiStatus => (this.apiStatus = apiStatus))
    },

    checkToken () {
      api.checkToken()
        .then(tokenStatus => (this.tokenStatus = tokenStatus))
        .catch(err => (
          this.tokenStatus = {
            status: err.status,
            statusText: err.statusText
          }
        ))
    }
  }
}
</script>

<style lang="scss">
  .key {
    text-transform: capitalize;
  }

  h2 {
    span {
      cursor: pointer;
    }
  }
</style>
