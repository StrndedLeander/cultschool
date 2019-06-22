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
      <div class="courses">
        <table class="table is-hoverable is-scrollable">
          <thead>
            <tr>
              <th class="topicBody has-text-left is-paddingless">Topic</th>
              <th class="nameHead has-text-left is-paddingless">Name</th>
              <th class="percHead has-text-left is-paddingless">
                <abbr title="Progress">%</abbr>
              </th>
              <th class="lvlHead has-text-left is-paddingless">
                <abbr title="Level">Lvl</abbr>
              </th>
              <th class="teacherHead has-text-centered is-paddingless">Teacher</th>
              <th class="likesHead has-text-centered is-paddingless">
                <span class="icon">
                  <i class="fas fa-heart"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="is-paddingless" v-for="course in courses" :key="course.id">
              <th class="topicBody">{{course.topic}}</th>
              <th class="nameBody">{{course.name}}</th>
              <td class="percBody is-paddingless">
                <progress class="progress is-info" :value="course.progress" max="100"></progress>
              </td>
              <td class="lvlBody">{{course.suggestedLvl}}</td>
              <td class="teacherBody">{{course.teacher}}</td>
              <td class="likesBody">{{Math.floor((course.likes/course.noStudents)*100)}}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="unities">
        <table class="unityTable is-fullwidth table is-hoverable is-scrollable">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Name</th>
              <td>Organisation</td>
              <td>Students</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="projects">
        <table class="projectTable is-fullwidth table is-hoverable is-scrollable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Topics</th>
              <td><abbr title="Progress">%</abbr></td>
              <td>Level</td>
              <td>Teacher</td>
              <td>Students</td>
              <th class="projectLikes">
                <span class="icon">
                  <i class="fas fa-heart"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="is-paddingless" v-for="project in projects" :key="project.id">
              <th class="topicBody">{{project.name}}</th>
              <th class="nameBody">{{project.topics}}</th>
              <td class="percBody is-paddingless">
                <progress class="progress is-info" :value="project.progress" max="100"></progress>
              </td>
              <td class="lvlBody">{{project.suggestedLvl}}</td>
              <td class="teacherBody">{{project.teacher}}</td>
              <td class="likesBody">{{Math.floor((course.likes/course.noStudents)*100)}}%</td>
            </tr>
          </tbody>
        </table>
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
  min-width: 400px;
  min-height: 570px;
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
.midProfile > .container {
  height: 100%;
}
.table {
  transform: translateY(-15%);
}
.is-scrollable tbody {
  overflow-y: auto;
  width: auto;
  position: absolute;
  height: 400%;
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
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
tbody {
  font-size: 80%;
}
tr {
  height: 100%;
}
.topicHead {
  width: 22%;
}

.nameHead {
  width: 22%;
}
.percHead {
  width: 5%;
}
.lvlHead {
  width: 13%;
}
.teacherHead {
  width: 27%;
}
.likesHead {
  width: 10%;
}
.topicBody {
  width: 30%;
}
.nameBody {
  width: 30%;
}
.percBody {
  width: 5%;
}
.lvlHead {
  width: 5%;
}
.teacherBody {
  width: 27%;
}
.likesBody {
  width: 3%;
}
//2nd table
.unityTable > thead > tr > th {
  width: 25%;
}
.unityTable > thead > tr > td {
  width: 25%;
}
//3rd table
.projectTable > thead > tr > td {
  width: 20%;
}
.projectTable > thead > tr > th {
  width: 22%;
}
.porjectLikes{
  width: 12%;
}
</style>