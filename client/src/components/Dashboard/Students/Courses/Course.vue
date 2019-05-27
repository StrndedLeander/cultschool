<template>
  <div class="course container">
    <div class="columns is-mobile uppperCourse">
      <div class="column">
        <div class="tags are-small has-addons is-marginless">
          <span class="tag is-white">{{subject}}</span>
          <span class="tag is-dark">{{creator}}</span>
        </div>
      </div>
      <div class="column is-one-fifth is-paddingless">
        <radial-progress-bar
          class="progress"
          :diameter="50"
          :completed-steps="courseProgress.progress"
          :total-steps="100"
          :strokeWidth="6"
          :startColor="courseProgress.startColor"
          :innerStrokeColor="courseProgress.innerStrokeColor"
        >
          <p class="progressTxt has-text-black">{{ courseProgress.progress }}%</p>
        </radial-progress-bar>
      </div>
    </div>
    <div class="is-marginless is-paddingless">
      <label class="label is-marginless has-text-centered courseName">{{courseName}}</label>
      <div class="content is-marginless is-paddingless">
        <label class="label lessonLabel">Lessons:</label>
        <ol class="lessonlist is-marginless has-text-white">
          <li class="lessons" v-for="lesson in lessons" :key="lesson.index">
            {{lesson.name}}
            <ol
              v-if="lesson.lessons.length > 0"
              class="secondaryList is-upper-roman is-marginless is-paddingless"
            >
              <li
                class="secondaryLesson"
                v-for="les in lesson.lessons"
                :key="les.index"
              >{{les.name}}</li>
            </ol>
          </li>
        </ol>
      </div>
      <figure class="image coursePic">
        <img :src="description.imageSrc">
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
              <p class="modal-card-title">{{courseName}}</p>
              <button class="delete" aria-label="close" @click="toggleDescription"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <figure class="image coursePic">
                <img :src="description.imageSrc">
              </figure>
              <p>{{description.text}}</p>
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
            <label class="infoLabel">Belegt: {{belegt}}</label>
          </div>
          <div class="column">
            <label class="infoLabel">Absolviert: {{absolviert}}</label>
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
import RadialProgressBar from "vue-radial-progress";
export default {
  components: {
    RadialProgressBar
  },
  data() {
    return {
      subject: "Subject",
      creator: "Creator",
      courseName: "Course #1",
      description: {
        text: "",
        imageSrc: "https://via.placeholder.com/214x120"
      },
      lessons: [
        {
          index: "1",
          name: "Lektion #1",
          lessons: [{ index: "1.1", name: "Lektion #1.1" }]
        },
        { index: "2", name: "Lektion #2", lessons: [] },
        { index: "3", name: "Lektion #3", lessons: [] },
        { index: "4", name: "Lektion #4", lessons: [] },
        { index: "5", name: "Lektion #5", lessons: [] }
      ],
      belegt: 1000,
      absolviert: 150,
      courseProgress: {
        progress: 100,
        startColor: "#5EFFFF",
        innerStrokeColor: "#73818B"
      },
      showDescription: false
    };
  },
  methods: {
    toggleDescription() {
      if (this.showDescription == true) {
        this.showDescription = false;
      } else {
        this.showDescription = true;
      }
    }
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

.coursePic {
  margin: auto;
  width: 65%;
  height: 35%;
  margin-bottom: 1%;
}
.progressTxt {
  font-size: 12px;
  font-weight: 600;
}
.descMenu {
  margin: auto;
}
.attend {
  margin-top: 2%;
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