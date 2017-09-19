<template>
  <div>
    <h2>Home</h2>
    <h3 class="green">{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      user: {}
    }
  },

  computed: {
    msg () {
      if (!this.user.fullname) { return 'N/A' }

      return `Welcome ${this.user.fullname}!`
    }
  }
}
</script>

<style lang="css">
</style>
