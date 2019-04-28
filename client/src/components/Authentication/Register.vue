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
                    <input
                      v-validate="'required'"
                      class="input is-large"
                      type="text"
                      placeholder="Choose your Username"
                      autofocus
                    >
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required|email'"
                      class="input is-large"
                      type="email"
                      placeholder="Your Email"
                    >
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required|min:8'"
                      name="password"
                      class="input is-large"
                      type="password"
                      :class="{'is-danger': errors.has('password')}"
                      placeholder="Choose a secure Password"
                      ref="password"
                    >
                    <span
                      v-show="errors.has('password')"
                      class="help is-danger"
                    >{{ errors.first('password') }}</span>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required|confirmed:password'"
                      name="password_confirmation"
                      class="input is-large"
                      type="password"
                      :class="{'is-danger': errors.has('password_confirmation')}"
                      placeholder="Confirm the password"
                      data-vv-as="password"
                    >
                    <span
                      v-show="errors.has('password_confirmation')"
                      class="help is-danger"
                    >{{ errors.first('password_confirmation') }}</span>
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