<template>
  <main class="container">
    <div class="form-container">
      <h1 class="title">Login</h1>
      <form @submit.prevent="login">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" class="input" type="email" placeholder="Ingrese su email" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Passowrd</label>
          <div class="control">
            <input v-model="password" class="input" type="password" placeholder="Ingrese su contraseña" required>
          </div>
        </div>

        <div class="field">
          <p class="control">
            <button class="button is-success">Login</button>
          </p>
        </div>
    </form>

    <div>
      <p>
        {{ error.statusText }}
        <small>{{ error.status }}</small>
      </p>
    </div>
    </div>
  </main>
</template>

<script>
import api from '@/api'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: '',

      error: {}
    }
  },

  methods: {
    login () {
      api.authenticate(this.email, this.password)
        .then(res => {
          window.localStorage.token = res.token
          window.localStorage.user = window.atob(res.token.split('.')[1])

          this.$router.push('/')
        })
        .catch(err => ( this.error = err ))
    }
  }
}
</script>

<style lang="scss">
  .form-container{
    width: 600px;
    margin: auto;
  }

  form {
    width: 400px;
    margin: auto;
  }
</style>
