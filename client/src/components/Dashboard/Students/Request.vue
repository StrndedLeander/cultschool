<template>
  <div class="userProfile" v-if="profileVisible" @mouseleave="hideProfile">
    <UserProfile :userID="1" class="userProfile" id="userProfile"></UserProfile>
  </div>
  <div class="request container" v-else>
    <div class="columns studentInfo is-mobile">
      <div class="studentProfile column is-paddingless">
        <figure class="image" @mouseenter="getPos">
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
            class="input is-small is-roundeSd has-text-centered is-marginless is-paddingless"
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
import Vue from "vue";
import UserProfile from "../UserProfile";
import StudentExp from "../../Students/Experience";
import { mapState,mapActions } from "vuex";
export default {
  components: {
    StudentExp,
    UserProfile
  },
  data() {
    return {
      selectedActivity: "Choose an Activity!",
      profileVisible: false,
      activities: []
    };
  },
  computed: {
    ...mapState("user", {
      courses: state => state.courses,
      projects: state => state.projects
    })
  },
  methods: {
    ...mapActions("ui", ["setPosUserProfile"]),
    setActivities() {
      for (let i = 0; i < this.courses.length; i++) {
        this.activities.push(this.courses[i].name);
      }
      for (let j = 0; j < this.projects.length; j++) {
        this.activities.push(this.projects[j].name);
      }
    },
    showProfile() {
      this.profileVisible = true;
    },
    hideProfile() {
      this.profileVisible = false;
    },
    setPosUserProfile(e) {
      console.log(e.x);
      const x = e.x;
      const y = e.y;
      const obj = document.getElementById("userProfile")
      this.setPosUserProfile(obj, x, y);
    }
  },
  mounted() {
    this.setActivities();
  }
};
</script>

<style lang="scss" scoped>
.request {
  padding-top: 2%;
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