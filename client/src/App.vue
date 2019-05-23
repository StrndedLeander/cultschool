<template>
  <div id="app" class="hero">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
html {
  overflow-y: auto !important;
  padding: 0;
  margin: 0;
}
.hero {
  width: 100vw;
  height: 100vh;
}
</style>
