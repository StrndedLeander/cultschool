<template>
  <div class="hero-body">
    <div class="columns topDb  is-marginless">
      <div class="column is-paddingless">
        <div class="columns">
          <div class="column">
            <MakeRequest></MakeRequest>
          </div>
          <div class="column">
            <GetRequested></GetRequested>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
    <div class="columns bottomDb  is-marginless">
      <div class="column"></div>
      <div class="column is-paddingless">
        <Courses></Courses>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import MakeRequest from "../components/Dashboard/Students/Request";
import GetRequested from "../components/Dashboard/Students/Requested";
import Courses from "../components/Dashboard/Students/Courses/Courses";
export default {
  name: "dashboard",
  components: {
    MakeRequest,
    GetRequested,
    Courses
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
.topDb {
  height: 40vh;
  margin-top: 4%;
}
</style>