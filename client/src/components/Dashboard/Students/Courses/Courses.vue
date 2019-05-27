<template>
  <div class="container">
    <div class="columns">
      <div class="column leftCol is-paddingless">
        <Course class="leftCourse"></Course>
        <span class="icon is-pulled-right leftArr">
          <i class="fas fa-arrow-left"></i>
        </span>
      </div>
      <div class="column midCol is-paddingless">
        <Course class="midCourse"></Course>
      </div>
      <div class="column rightCol is-paddingless">
        <Course class="rightCourse"></Course>
        <span class="icon rightArr">
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Course from "./Course";
export default {
  components: {
    Course
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 50w;
}
.leftCol {
  z-index: 0;
  margin-right: -25%;
  opacity: 0.75;
}
.leftCourse {
  transform: scale(0.80,0.80);
  pointer-events: none;
}
.midCol {
  z-index: 1;
}
.midCourse {
  width: 100%;
  height: 100%;
}
.rightCol {
  z-index: 0;
  margin-left: -25%;
  opacity: 0.75;
}
.rightCourse {
  transform: scale(0.80,0.80);
  pointer-events: none;
}
.leftArr {
  margin-right: 5%;
}
.rightArr {
  margin-left: 5%;
}
</style>