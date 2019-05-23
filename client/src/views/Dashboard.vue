<template>
  <div class="hero-body">
    <div class="columns">
      <div class="column">
        <div class="columns">
          <div class="column first">
            <MakeRequest class="makeReq topReq"></MakeRequest>
            <MakeRequest class="makeReq downReq"></MakeRequest>
          </div>
          <div class="column second">
            <GetRequest class="getReq topReq"></GetRequest>
            <GetRequest class="getReq downReq"></GetRequest>
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
import GetRequest from "../components/Dashboard/Students/Requested"
export default {
  name: "dashboard",
  components: {
    MakeRequest,
    GetRequest
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
  margin-top: 1.5%;
  margin-left: 0.3w;
}
.column {
  padding: 0;
}
.second{
  margin-left: 0.2vw;
}
.downReq {
  margin-top: 10%;
}
</style>