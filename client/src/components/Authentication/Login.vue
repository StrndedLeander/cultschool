<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Login</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box">
              <form>
                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required'"
                      :value="username"
                      @input="updateLoginName"
                      name="username"
                      class="input is-large"
                      type="text"
                      placeholder="Username"
                      autofocus
                    >
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required'"
                      :value="password"
                      @input="updateLoginPassword"
                      name="password"
                      class="input is-large"
                      type="password"
                      placeholder="Password"
                    >
                  </div>
                </div>

                <!-- <div class="field has-text-left">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>-->
                <button class="button is-block is-info is-large is-fullwidth" @click="login">Login</button>
              </form>
            </div>
            <p class="help has-text-grey has-text-centered">
              <a v-on:click="changeAuth">Don't have an account yet?</a> &nbsp;·&nbsp;
              <router-link to="/authentication/password">Forgot Password</router-link>&nbsp;·&nbsp;
              <router-link to="/authentication/help">Need Help?</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("auth", {
      username: state => state.login.username,
      password: state => state.login.password
    })
  },
  methods: {
    ...mapActions("auth", ["changeAuth", "login"]),
    ...mapMutations("auth", ["setLoginName", "setLoginPassword"]),
    updateLoginName(e) {
      this.setLoginName(e.target.value);
    },
    updateLoginPassword(e) {
      this.setLoginPassword(e.target.value);
    }
  }
};
</script>

<style scoped>
.help {
  display: inline;
}
</style>