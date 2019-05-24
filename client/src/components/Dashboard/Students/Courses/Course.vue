<template>
  <div class="course container">
    <div class="tags is-marginless are-medium is-hidden-touch">
      <span class="tag is-white courseInfo">{{subject}}</span>
      <span class="tag is-dark courseInfo">{{creator}}</span>
    </div>
    <div class="tags are-small is-hidden-desktop">
      <span class="tag is-white">{{subject}}</span>
      <span class="tag is-dark">{{creator}}</span>
    </div>
    <div class="courseDesc">
      <label class="label has-text-centered courseName">{{courseName}}</label>
      <label class="label lessonLabel">Lessons:</label>
      <ul class="lessonList has-text-black">
        <li v-for="lesson in lessons" :key="lesson">{{lesson}}</li>
      </ul>
      <figure class="image coursePic">
        <img src="https://via.placeholder.com/214x120">
      </figure>
      <div class="studentNumbers">
				<div class="students tags are-small">
        <label class="infoLabel">Belegt:</label>
        <span class="tag is-white is-paddingless is-marginless studentInfo">{{belegt}}</span>
        <label class="infoLabel absolviert">Absolviert:</label>
        <span class="tag is-dark is-paddingless is-marginless studentInfo">{{absolviert}}</span>
				</div>
      </div>
    </div>

    <radial-progress-bar
      class="progress"
      :diameter="45"
      :completed-steps="courseProgress.progress"
      :total-steps="100"
      :strokeWidth="6"
      :startColor="courseProgress.startColor"
      :innerStrokeColor="courseProgress.innerStrokeColor"
    >
      <p class="progressTxt has-text-black">{{ courseProgress.progress }}%</p>
    </radial-progress-bar>
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
      lessons: ["Lektion #1", "Lektion #2", "Lektion #3"],
      belegt: 1000,
      absolviert: 150,
      courseProgress: {
        progress: 30,
        startColor: "#5EFFFF",
        innerStrokeColor: "#73818B"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 33.3vw;
  height: 37vw;
  max-width: 360px;
  max-height: 400px;
  min-width: 225px;
  min-height: 250px;
  background-color: #667581;
}
.courseInfo {
  margin: auto;
  margin-top: 5%;
}
.lessonLabel {
  margin-left: 10%;
}
.lessonList {
  margin-left: 15%;
  margin-right: 10%;
  height: 75px;
  overflow: auto;
  list-style-type: disc;
}
.coursePic {
  margin: auto;
  width: 65%;
  height: 35%;
}
.infoLabel {
  margin-left: 10%;
  margin-right: 5%;
}
.studentNumbers {
  width: 80%;
  margin: auto;
}
.studentInfo {
  min-width: 25px;
  height: 20px;
}
.progressTxt {
  font-size: 8px;
  font-weight: 600;
}
// Lesson scrollbar styling
.lessonList::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.lessonList::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.lessonList::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>