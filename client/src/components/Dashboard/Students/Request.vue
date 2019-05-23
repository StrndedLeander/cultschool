<template>
  <div class="request container">
    <div class="studentProfile">
        <figure class="image is-64x64">
            <img src="https://via.placeholder.com/64">
        </figure>
    </div>
    <div class="studentExp">
        <StudentExp></StudentExp>
    </div>
  </div>
</template>

<script>
import StudentExp from '../../Students/Experience'
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
  height: 200px;
}
</style>