<template>
  <div class="container">
    <carousel class="carousel" :perPage="1" :paginationEnabled="false" :navigationEnabled="true">
      <slide v-for="course in this.coursesInfo" :key="course.id">
        <Course class="course" v-bind:courseID="course.id"></Course>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import Course from "./Course";
export default {
  components: {
    Course,
    Carousel,
    Slide
  },
  computed: {
    ...mapState("courses", {
      coursesInfo: state => state.coursesInformation
    })
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 40vw;
  min-width: 355px;
  height: 400px;
  position: relative;
}
.carousel {
  width: 100%;
}
.course {
  margin-top: 3%;
  height: 400px;
  width: 100%;
}
</style>