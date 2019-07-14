<template>
  <div id="app" class="hero is-marginless is-paddingless">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapState, mapMutations } from "vuex"
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState("ui",{
      userProfileDropOut: state => state.userProfileShowing
    })
  },
  methods: {
    //make background opaque when user profile is triggered
    opaqueBg() {
      
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  overflow-y: auto !important;
}
.hero {
  width: 100vw;
  height: 100vh;
}
</style>
