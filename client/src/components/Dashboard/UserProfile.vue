<template>
  <div class="profile container">
    <!-- Top of Profile -->
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
      <div class="column is-paddingless has-text-right">
        <StudentExp class="studentExp"></StudentExp>
      </div>
      <div class="column actionCol">
        <div class="profileActions has-text-right">
          <div>
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
          </div>
          <div>
            <span class="icon">
              <i class="far fa-sticky-note"></i>
            </span>
          </div>
          <div>
            <span class="icon">
              <i class="fas fa-comment"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="is-divider"></div>
    <!-- Mid of Profile-->
    <div class="midProfile">
      <table class="courseTable is-fullwidth table is-bordered">
        <thead>
          <tr>
            <th class="has-text-centered is-paddingless">Topic</th>
            <th class="has-text-centered is-paddingless">Name</th>
            <th class="has-text-centered is-paddingless">
              <abbr class="has-text-centered" title="Difficulty Level">Lvl</abbr>
            </th>
            <th class="teacherHead has-text-centered is-paddingless">Teacher</th>
            <th class="likesHead has-text-centered is-paddingless">
              <abbr title="Progress">%</abbr>
            </th>
          </tr>
        </thead>
        <tbody class="courseBody">
          <tr v-for="course in courses" :key="course.id">
            <td class="is-paddingless">{{course.topic}}</td>
            <td class="is-paddingless">{{course.name}}</td>
            <td class="is-paddingless">{{course.suggestedLvl}}</td>
            <td class="is-paddingless">{{course.teacher}}</td>
            <td class="is-paddingless">{{course.progress}}</td>
          </tr>
        </tbody>
      </table>
      <table class="unityTable table is-fullwidth is-bordered table is-hoverable">
        <thead>
          <tr>
            <th class="has-text-centered is-paddingless">Teacher</th>
            <th class="has-text-centered is-paddingless">Name</th>
            <td class="has-text-centered is-paddingless">Organisation</td>
            <td class="has-text-centered is-paddingless">Students</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unity in unities" :key="unity.id">
            <td class="is-paddingless">{{unity.teacher}}</td>
            <td class="is-paddingless">{{unity.name}}</td>
            <td class="is-paddingless organisationAbbr">
              {{unity.organisationAbbr}}
              <span>
                <td class="is-paddingless organisationName">{{unity.organisationName}}</td>
              </span>
            </td>
            <td class="is-paddingless">{{unity.noStudents}}</td>
          </tr>
        </tbody>
      </table>
      <table class="projectTable is-fullwidth table is-bordered is-hoverable">
        <thead>
          <tr>
            <th class="has-text-centered is-paddingless">Topics</th>
            <th class="has-text-centered is-paddingless">Name</th>
            <th class="has-text-centered is-paddingless">
              <abbr title="Difficulty Level">Lvl</abbr>
            </th>
            <td class="has-text-centered is-paddingless">Teacher</td>
            <td class="has-text-centered is-paddingless">
              <abbr title="Progress">%</abbr>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StudentExp from "../Students/Experience";
export default {
  props: ["userID"],
  components: {
    StudentExp
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("viewProfile", {
      username: state => state.username
    }),
    ...mapState("user", {
      courses: state => state.courses,
      projects: state => state.projects,
      unities: state => state.unities
    })
  }
};
</script>

<style lang="scss" scoped>
.profile {
  width: 28vw;
  height: 60vh;
  min-width: 420px;
  min-height: 630px;
  max-width: 500px;
  max-height: 1200px;
  border: 1px solid black;
  margin-left: 5%;
  z-index: 10;
  background-color: #afb8be;
  top: 0;
  left: 0;
  position: absolute;
}
.studentInfo {
  height: 15%;
}
.fa-heart {
  color: red;
}
@media screen and (max-width: 1350px) {
  .userImg {
    transform: scale(0.9, 0.9);
  }
}
@media screen and (max-width: 1250px) {
  .userImg {
    margin-left: 15%;
    margin-top: 15%;
    margin-right: 5%;
  }
  .username {
    margin-left: 8%;
    margin-top: 20%;
    font-size: 130%;
  }
  .studentExp {
    margin: auto;
    margin-top: 55%;
  }
}
@media screen and (min-width: 1251px) {
  .userImg {
    margin-left: 15%;
    margin-top: 15%;
    margin-right: 5%;
  }
  .username {
    margin-left: 5%;
    margin-top: 20%;
    font-size: 150%;
  }
  .studentExp {
    margin: auto;
    margin-top: 65%;
  }
}
.profileActions {
  margin-top: 5%;
  height: 20%;
}
.actionCol {
  width: 20px;
}
.rightCol {
  margin-top: 3%;
}
.midProfile {
  height: 85%;
}
.midProfile {
  transform: translateY(-5%);
}
.courseTable {
  margin-top: 5%;
  max-height: 200px;
}
tbody {
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(78, 78, 78);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.organisationName {
  display: none;
}
.organisationAbbr:hover + .organisationName {
  display: unset;
}
.organisationName:hover + .organisationAbbr {
  display: unset;
}
</style>