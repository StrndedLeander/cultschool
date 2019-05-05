<template>
  <div class="hero">
    <div>Welcome to the school of future!</div>
    <ListUsers></ListUsers>
  </div>
</template>

<script>
import ListUsers from '../components/ListUsers'
export default {
  name: "dashboard",
  components: {
    ListUsers
  }
};
</script>

<style scoped>
</style>