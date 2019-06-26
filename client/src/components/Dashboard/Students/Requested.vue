<template>
<div class="userProfile" v-if="profileVisible" @mouseleave="hideProfile">
    <UserProfile :userID="1" class="userProfile" id="userProfile"></UserProfile>
  </div>
  <div class="getRequest container" v-else >
    <div class="columns studentInfo is-mobile">
      <div class="studentProfile column is-paddingless">
        <figure class="image"  @mouseenter="showProfile">
          <img src="https://via.placeholder.com/64">
        </figure>
      </div>
      <div class="column is-paddingless">
        <StudentExp class="studentExp"></StudentExp>
      </div>
    </div>

    <div class="requestForm">
      <div class="tags has-addons is-marginless is-paddingless has-text-left">
        <span class="tag is-dark">{{studentName}}</span>
        <span class="tag is-info">{{activityName}}</span>
      </div>
      <textarea class="textarea is-paddingless is-small has-fixed-size" rows="2" readonly v-model="requestMessage"></textarea>
      <div class="buttons are-small">
        <button type="button" class="button has-text-white accept is-paddingless">Accept</button>
        <button type="button" class="button has-text-white decline is-paddingless">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
import StudentExp from "../../Students/Experience";
import UserProfile from "../UserProfile";
export default {
  components: {
    StudentExp,
    UserProfile
  },
  data() {
    return {
      studentName: "Surname Name",
      activityName: "Course #1",
      requestMessage: "Hello pls work with me please thank you",
      profileVisible: false
    };
  },
  methods: {
    showProfile() {
      this.profileVisible = true;
    },
    hideProfile() {
      this.profileVisible = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.getRequest {
  width: 13vw;
  height: 13vw;
  max-width: 200px;
  max-height: 200px;
  min-width: 190px;
  min-height: 190px;
  background-color: #667581;
  border-radius: 5%;
}
// top of request
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
// bottom of Request
.requestForm {
  width: 95%;
  margin: auto;
}
.textarea {
  width: 100%;
  height: 33%;
  margin-bottom: 2%;
}
.buttons {
  width: 90%;
  margin: auto;
}
.button {
  background-color: #7b8892;
  border-radius: 5%;
  width: 40%;
  height: 100%;
  margin-left: 5%;
}
.decline {
  border: 3px solid #ff7777;
}
.accept {
  border: 3px solid #5bcd72;
}
.tags {
  width: 100%;
}
.tag {
  width: 50%;
  overflow: hidden;
}
</style>