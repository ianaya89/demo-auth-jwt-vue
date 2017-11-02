<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <h1 class="title">Perfil</h1>

      <div class="content">
        <ul>
          <li v-for="(v, k) in user" :key="k">
            <b class="key">{{ k }}</b>: <span>{{ v }}</span>
          </li>
        </ul>
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
  }
}
</script>

<style lang="scss">
  .key {
    text-transform: capitalize;
  }
</style>
