<template>
  <div class="request container is-marginless is-paddingless">
    <article></article>
    <div class="columns studentInfo is-mobile">
      <div class="studentProfile column is-paddingless">
        <figure class="image">
          <img src="https://via.placeholder.com/64">
        </figure>
      </div>
      <div class="column is-paddingless">
        <StudentExp class="studentExp"></StudentExp>
      </div>
    </div>

    <div class="requestForm">
      <div class="chooseActivity">
        <div class="select is-small is-rounded is-success">
          <select v-model="selectedActivity">
            <option default>Choose an Activity!</option>
            <option disabled>___________________________</option>
            <option v-for="(activity, index) in activities" :key="index">{{activity}}</option>
          </select>
        </div>
      </div>
      <div class="field is-paddingless is-marginless">
        <p class="control searchStudent has-icons-left">
          <input
            class="input studentName is-small is-rounded has-text-centered is-paddingless"
            placeholder="Students Name"
          >
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped is-paddingless is-marginless">
        <div class="messageInput control has-icons-left has-icons-right">
          <input
            class="input is-small is-rounded has-text-centered is-marginless is-paddingless"
            type="text"
            placeholder="Send Message.."
          >
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <div class="control">
          <button class="button submitBtn is-primary is-small">
            <span class="icon is-right">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentExp from "../../Students/Experience";
export default {
  components: {
    StudentExp
  },
  data() {
    return {
      selectedActivity: "Choose an Activity!",
      activities: ["Course #1", "Course #2", "Course #3", "Project #1"]
    };
  }
};
</script>

<style lang="scss" scoped>
.request {
  width: 13vw;
  height: 13vw;
  max-width: 200px;
  max-height: 200px;
  min-width: 190px;
  min-height: 190px;
  background-color: #667581;
  border-radius: 5%;
}
// Top of Request
.studenInfo {
  width: 100%;
  height: 100%;
}
.column {
  width: 50%;
}
.image {
  width: 70%;
  margin: auto;
}
.image > img {
  border-radius: 50%;
  margin-top: 2px;
}
.studentExp {
  margin: auto;
  margin-top: 12%;
}
// Bottom of Request
.requestForm {
  width: 95%;
  margin: auto;
}
.searchStudent {
  margin-top: 2%;
  margin-bottom: 2%;
}
.select {
  width: 100%;
}
select {
  width: 100%;
}
.messageInput {
  width: 75%;
  height: 100%;
}
</style>