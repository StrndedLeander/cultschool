<template>
  <div class="hero-body">
    <div class="columns topDb is-marginless">
      <div class="column is-paddingless">
        <div class="columns">
          <div class="column is-paddingless section">
            <MakeRequest class="req"></MakeRequest>
          </div>
          <div class="column is-paddingless section">
            <GetRequested class="req"></GetRequested>
          </div>
          <div class="column section"><Project></Project></div>
        </div>
      </div>
    </div>
    <div class="columns bottomDb is-marginless">
      <div class="column"></div>
      <div class="column courseCol is-paddingless section">
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
import Project from "../components/Dashboard/Students/Project"
export default {
  name: "dashboard",
  components: {
    MakeRequest,
    GetRequested,
    Courses,
    Project
  }
};
</script>

<style scoped>
.hero-body {
  padding: 0;
  background-image: url("../assets/Dashboard/hexagon.png");
  margin: 1vw 1vw 1vw 1vw;
  width: 98vw;
  height: 84vh;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
}
.topDb {
  height: 40vh;
  margin-top: 4%;
}
.req {
  margin-top: 5%;
}
.courseCol{
  transform: scale(0.8,0.8)
}
</style>