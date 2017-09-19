<template>
  <div>
    <h2>Login</h2>
    <div>
      <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button>Login</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    user () {
      return `Welcome ${this.user.fullname}!`
    }
  },

  methods: {
    login () {

    }
  }
}
</script>

<style lang="css">

input {
  border-radius: 5px;
  display: inline-block;
  height: 30px;
  width: 200px;
}

button {
  height: 35px;
  width: 80px;
}
</style>
