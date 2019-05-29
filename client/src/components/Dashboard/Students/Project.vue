<template>
  <div class="project container">
    <div class="columns is-marginless">
      <div class="column about has-text-centered">
        <label class="label">{{projectName}}</label>
        <div class="columns">
          <div class="column">
            <div class="description"></div>
          </div>
          <div class="column is-one-fifth">
            <ul class="description-nav">
              <li>
                <span class="icon">
                  <i class="fas fa-circle"></i>
                </span>
              </li>
              <li>
                <span class="icon">
                  <i class="far fa-circle"></i>
                </span>
              </li>
              <li>
                <span class="icon">
                  <i class="far fa-circle"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <label class="label days">Due: --:--</label>
          </div>
          <div class="column">
            <label class="label days">Remaining Days: 0</label>
          </div>
        </div>
        <radial-progress-bar
          class="progress"
          :diameter="75"
          :completed-steps="77"
          :total-steps="100"
          :strokeWidth="6"
          :startColor="progressBar.startColor"
          :innerStrokeColor="progressBar.innerStrokeColor"
        >
          <p class="progressTxt has-text-black">77%</p>
        </radial-progress-bar>
      </div>
      <div class="column tasks">
        <button class="button" :disabled="todos" @click="todos = !todos">To Do</button>
        <button class="button" :disabled="!todos" @click="todos = !todos">Done</button>
        <div class="taksContainer">
        <ol v-if="todos" class="todoList has-text-centered">
          <li>Task #2</li>
        </ol>
        <ol v-if="!todos" class="doneList has-text-centered">
          <li>Task #1</li>
        </ol>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
export default {
  data() {
    return {
      todos: true,
      projectName: "Project",
      progressBar: {
        startColor: "#5EFFFF",
        innerStrokeColor: "#73818B"
      }
    };
  },
  components: {
    RadialProgressBar
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 36vw;
  height: 20vw;
}
.about {
  width: 100%;
  height: 20vw;
  border-right: 1px solid black;
  background-color: #afb8be;
}
.tasks {
  height: 20vw;
  background-color: #a1a8ac;
}
.description {
  width: 100%;
  height: 125%;
  border: 1px solid black;
}
.days {
  font-size: 75%;
}
</style>