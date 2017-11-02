<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
        <p class="navbar-item">
          <b>🔐 Vue.js + JWT</b>
        </p>

        <router-link class="navbar-item" to="/">
          <span class="bd-emoji">🏠&nbsp;</span>
          Inicio
        </router-link>
        <router-link class="navbar-item" to="/profile">
          <span class="bd-emoji">👱️&nbsp;</span>
          Perfil
        </router-link>
        <a class="navbar-item" @click="logout">
          <span class="bd-emoji">🚪️&nbsp;</span>
          Logout
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="https://github.com/ianaya89/demo-auth-jwt-vue" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/ianaya89" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://speakerdeck.com/ianaya89/autenticacion-vue-dot-js-plus-jwt" target="_blank" href="https://twitter.com/intent/tweet?text=Autenticacion con Vue.js y JWT &hashtags=JWT,VueJS&url=https://speakerdeck.com/ianaya89/autenticacion-vue-dot-js-plus-jwt">
                <span class="icon"> <i class="fa fa-twitter"></i></span>
                <span>Tweet</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopBar',

  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
