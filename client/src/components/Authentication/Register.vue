<template>
  <div class="register">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Register</h3>
            <p class="subtitle has-text-grey">Welcome! Create a new User!</p>
            <p class="subtitle has-text-grey">Fill out the form to proceed.</p>
            <div class="box">
              <form>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="Choose your Username" autofocus>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="email" placeholder="Your Email">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="password"
                      placeholder="Choose a secure Password"
                    >
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      class="input is-large"
                      type="password"
                      placeholder="Confirm the password"
                    >
                  </div>
                </div>

                <button class="button is-block is-info is-large is-fullwidth">Register</button>
              </form>
            </div>
            <p class="has-text-grey">
              <a v-on:click="changeAuth">Already have an account?</a> &nbsp;·&nbsp;
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
</style>