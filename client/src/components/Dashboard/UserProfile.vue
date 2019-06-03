<template>
  <div class="profile container">
    <div class="columns studentInfo is-mobile">
      <div class="column is-paddingless">
        <figure class="image userImg is-96x96">
          <img src="https://via.placeholder.com/96">
        </figure>
      </div>
      <div class="column is-paddingless is-half has-text-centered">
        <label class="label username">{{username}}</label>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="column is-paddingless">
        <StudentExp class="studentExp"></StudentExp>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StudentExp from "../Students/Experience";
export default {
  props: ["id"],
  components: {
    StudentExp
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("viewProfile", {
      username: state => state.username
    })
  }
};
</script>

<style lang="scss" scoped>
.profile {
  width: 33vw;
  height: 60vh;
  min-width: 300px;
  border: 1px solid black;
  margin-left: 5%;
  z-index: 1;
  background-color: #afb8be;
}
.userImg {
  margin-left: 15%;
  margin-top: 15%;
}
.studentExp {
  margin: auto;
  margin-top: 45%;
}
.username {
  margin-top: 10%;
  font-size: 150%;
}
</style>