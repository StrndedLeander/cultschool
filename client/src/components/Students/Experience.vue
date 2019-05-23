<template>
  <radial-progress-bar class="progress"
    :diameter="50"
    :completed-steps="studentLevel"
    :total-steps="totalLevel"
    :strokeWidth="6"
    :startColor=startColor
    :innerStrokeColor=innerStrokeColor
  >
    <p>Ø {{ studentLevel }}</p>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  data() {
    return {
      studentLevel: 5,
      totalLevel: 100,
      startColor: '#B553FF',
      innerStrokeColor: '#73818B'
    };
  },

  components: {
    RadialProgressBar
  }
};
</script>

<style lang="scss" scoped>

p {
  font-size: 11px;
  font-weight: 600;
}
</style>