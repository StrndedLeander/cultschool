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
  width: 45vw;
  height: 400px;
}
.course {
  width: 100%;
  height: 100%;
}
</style>