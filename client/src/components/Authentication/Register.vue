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
                      :value="username"
                      @input="updateName"
                      class="input is-large"
                      name="username"
                      type="text"
                      placeholder="Choose a Username"
                      autofocus
                    >
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required|email'"
                      :value="email"
                      @input="updateEmail"
                      name="email"
                      class="input is-large"
                      type="email"
                      placeholder="Enter your E-Mail"
                    >
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      v-validate="'required|min:8'"
                      :value="password"
                      @input="updatePassword"
                      name="password"
                      class="input is-large"
                      type="password"
                      :class="{'is-danger': errors.has('password')}"
                      placeholder="Choose a Password"
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
                      v-model="password_confirm"
                      name="password_confirmation"
                      class="input is-large"
                      type="password"
                      :class="{'is-danger': errors.has('password_confirmation')}"
                      placeholder="Confirm the Password"
                      data-vv-as="password"
                    >
                    <span
                      v-show="errors.has('password_confirmation')"
                      class="help is-danger"
                    >{{ errors.first('password_confirmation') }}</span>
                  </div>
                </div>

                <button
                  class="button is-block is-info is-large is-fullwidth"
                  :disabled="errors.has('password_confirmation') || password_confirm.length < 8"
                  @click="register"
                >Register</button>
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      password_confirm: ""
    };
  },
  computed: {
    ...mapState("auth", {
      username: state => state.register.username,
      email: state => state.register.email,
      password: state => state.register.password
    })
  },
  methods: {
    ...mapActions("auth", ["changeAuth", "register"]),
    ...mapMutations("auth", [
      "setRegisterName",
      "setRegisterEmail",
      "setRegisterPassword"
    ]),
    updateName(e) {
      this.setRegisterName(e.target.value);
    },
    updateEmail(e) {
      this.setRegisterEmail(e.target.value);
    },
    updatePassword(e) {
      this.setRegisterPassword(e.target.value);
    }
  }
};
</script>

<style scoped>
</style>