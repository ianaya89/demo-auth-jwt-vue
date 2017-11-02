<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    logout () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';

.container {
  margin-top: 50px;
}
</style>
