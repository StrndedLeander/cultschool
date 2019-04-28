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
                      v-validate="'required|email'"
                      name="email"
                      class="input is-large"
                      type="email"
                      placeholder="Your Email"
                      autofocus
                    >
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required'"
                      name="password"
                      class="input is-large"
                      type="password"
                      placeholder="Your Password"
                    >
                  </div>
                </div>

                <div class="field has-text-left">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <button class="button is-block is-info is-large is-fullwidth">Login</button>
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["changeAuth"])
  }
};
</script>

<style scoped>
.help {
  display: inline;
}
</style>