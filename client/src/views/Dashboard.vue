<template>
  <div class="hero-body">
    <div class="columns">
      <div class="column">
        <div class="columns">
          <div class="column">
            <MakeRequest class="makeReq topReq"></MakeRequest>
            <MakeRequest class="makeReq downReq"></MakeRequest>
          </div>
          <div class="column">
            <MakeRequest class="makeReq topReq"></MakeRequest>
            <MakeRequest class="makeReq downReq"></MakeRequest>
          </div>
        </div>
      </div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import MakeRequest from "../components/Dashboard/Students/Request";
export default {
  name: "dashboard",
  components: {
    MakeRequest
  }
};
</script>

<style scoped>
.hero-body {
  padding: 0;
  background-image: url("../assets/Dashboard/hexagon.png");
  margin: 2.5vw 2.5vw 2.5vw 2.5vw;
  width: 95vw;
}
.columns {
  margin: 0;
  padding: 0;
}
.downReq {
  margin-top: 15%;
}
</style>