<template>
  <div class="container">
    <div v-if="hasAcc">
      <Login></Login>
    </div>
    <div v-else>
      <Register></Register>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
export default {
  name: "authentication",
  components: {
    Login,
    Register
  },
  computed: {
    ...mapState("auth", {
      hasAcc: state => state.hasAcc
    })
  }
};
</script>

<style lang="scss" scoped>
</style>