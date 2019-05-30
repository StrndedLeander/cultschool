<template>
  <div class="course container">
    <div class="columns is-mobile uppperCourse">
      <div class="column">
        <div class="tags are-small has-addons is-marginless">
          <span class="tag is-white">{{courseInfo.subject}}</span>
          <span class="tag is-dark">{{courseInfo.creator}}</span>
        </div>
      </div>
      <div class="column is-one-fifth">
        <radial-progress-bar
          class="progress"
          :diameter="45"
          :completed-steps="courseInfo.progress"
          :total-steps="100"
          :strokeWidth="6"
          :startColor="progressBar.startColor"
          :stopColor="progressBar.stopColor"
          :innerStrokeColor="progressBar.innerStrokeColor"
        >
          <p class="progressTxt has-text-black">{{ courseInfo.progress }}%</p>
        </radial-progress-bar>
      </div>
    </div>
    <div class="is-marginless is-paddingless">
      <label
        class="label is-marginless has-text-centered courseName"
      >{{courseInfo.courseName}}{{courseInfo.courseID}}</label>
      <div class="content is-marginless is-paddingless">
        <label class="label lessonLabel">Lessons:</label>
        <ol class="lessonlist is-marginless has-text-white">
          <li class="lessons" v-for="unit in courseInfo.units" :key="unit.index">
            {{unit.name}}
            <ol
              v-if="unit.lessons.length > 0"
              class="secondaryList is-upper-roman is-marginless is-paddingless"
            >
              <li class="secondaryLesson" v-for="les in unit.lessons" :key="les.index">{{les.name}}</li>
            </ol>
          </li>
        </ol>
      </div>
      <figure class="image coursePic">
        <img :src="courseInfo.imageSrc">
      </figure>
      <div class="courseDesc has-text-centered">
        <label class="descMenu label">
          Description
          <a class="button is-small is-primary" @click="toggleDescription">
            <span class="icon is-small has-text-centered">
              <i
                class="toggleDescription fas"
                :class="{'fa-plus':!showDescription, 'fa-minus': showDescription }"
              ></i>
            </span>
          </a>
        </label>
        <div class="modal" v-if="showDescription" :class="{'is-active': showDescription}">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{{courseInfo.courseName}}</p>
              <button class="delete" aria-label="close" @click="toggleDescription"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <figure class="image coursePic">
                <img :src="courseInfo.imageSrc">
              </figure>
              <p>{{courseInfo.text}}</p>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success">Join Course</button>
              <button class="button" @click="toggleDescription">Cancel</button>
            </footer>
          </div>
        </div>
      </div>
      <div class="studentNumbers">
        <div class="students content columns is-mobile has-text-centered">
          <div class="column">
            <label class="infoLabel">Belegt: {{courseInfo.belegt}}</label>
          </div>
          <div class="column">
            <label class="infoLabel">Absolviert: {{courseInfo.absolviert}}</label>
          </div>
        </div>
      </div>
      <div class="attend has-text-right">
        <router-link to="#" class="has-text-black">
          Go to
          <span class="icon">
            <i class="fas fa-arrow-right"></i>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RadialProgressBar from "vue-radial-progress";
export default {
  props: [
    "courseID",
  ],
  components: {
    RadialProgressBar
  },
  data() {
    return {
      progressBar: {
        startColor: "#5EFFFF",
        stopColor: "#5EFFFF",
        innerStrokeColor: "#73818B"
      },
      showDescription: false,
      courseInfo: {}
    };
  },
  computed: {
    ...mapState("courses", {
      coursesInfo: state => state.getInfoByIDcoursesInformation
    })
  },
  methods: {
    ...mapActions("courses", ["getInfoById"]),
    toggleDescription() {
      this.showDescription = !this.showDescription;
    }
  },
  mounted() {
    this.getInfoById(this.courseID).then(course => {
      this.courseInfo = course[0]
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 30vw;
  height: 35vw;
  max-width: 360px;
  max-height: 400px;
  min-width: 328px;
  min-height: 375px;
  background-color: #667581;
  border-radius: 5%;
}
.has-addons{
  padding-top: 5%; 
  padding-left: 5%;
}
.columns {
  height: 10%;
}
.lessonLabel {
  margin-left: 10%;
  margin-bottom: 0 !important;
}
.lessonlist {
  height: 75px;
  overflow: auto;
}
.lessons {
  margin: auto;
  margin-left: 25%;
}
.secondaryLesson {
  margin-left: 10%;
}
.modal, .is-active{
  width: 100%;
  height: 100%;
}
.coursePic {
  margin: auto;
  width: 65%;
  height: 35%;
  margin-bottom: 1%;
}
.progressTxt {
  font-size: 10.5px;
  font-weight: 600;
}
.descMenu {
  margin: auto;
}
.attend {
  margin-top: 1%;
  margin-right: 2%;
}
@media screen and (min-wdith: 1024px) {
  .students {
    margin: auto;
    width: 95%;
  }
  .studentNumbers {
    width: 80%;
    margin: auto;
  }
  .studentInfo {
    min-width: 25px;
    height: 20px;
  }
}
@media screen and (max-wdith: 1023px) {
  .students {
    margin: auto;
    width: 95%;
  }
  .studentNumbers {
    width: 80%;
    margin: auto;
  }
  .studentInfo {
    min-width: 25px;
    height: 20px;
  }
  .infoLabel {
    font-size: 10px;
  }
}
</style>