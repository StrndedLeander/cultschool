<template>
  <div class="container">
    <div v-if="users.length > 0">
      <ul v-for="user in users" :key="user.id">
        <li>{{user.username}}</li>
      </ul>
    </div>
    <div v-if="users.length === 0">
      <button class="button" @click="getAllUsers">List Users</button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    getAllUsers() {
      this.$http
        .get("/authentication/users")
        .then(res => {
          console.log(res);
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
