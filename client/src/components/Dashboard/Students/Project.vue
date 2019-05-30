<template>
  <div class="project container is-hidden-mobile">
    <div class="columns is-marginless">
      <div class="column about has-text-centered">
        <label class="label projectName">{{projectName}}</label>
        <div class="columns">
          <div class="column is-paddingless">
            <div class="description">
              <p v-if="descNav.desc">Beschreibung</p>
              <figure v-if="descNav.picture" class="image is-2by1">
                <img src="https://via.placeholder.com/200x110" width="200px" height="110px">
              </figure>
              <p v-if="descNav.info">Creator</p>
            </div>
          </div>
          <div class="column is-one-fifth description-nav is-paddingless">
            <ul>
              <li @click="switchToDesc">
                <span class="icon">
                  <i class="fa-circle" :class="{'far': !descNav.desc, 'fas': descNav.desc}"></i>
                </span>
              </li>
              <li @click="switchToPicture">
                <span class="icon">
                  <i class="fa-circle" :class="{'far': !descNav.picture, 'fas': descNav.picture}"></i>
                </span>
              </li>
              <li @click="switchToInfo">
                <span class="icon">
                  <i class="fa-circle" :class="{'far': !descNav.info, 'fas': descNav.info}"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="columns">
          <div class="column is-paddingless">
            <label class="label days">Due: --.--.--</label>
          </div>
          <div class="column is-paddingless">
            <label class="label days">Remaining Days: 0</label>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-paddingless">
            <radial-progress-bar
              class="progress"
              :diameter="100"
              :completed-steps="77"
              :total-steps="100"
              :strokeWidth="6"
              :startColor="progressBar.startColor"
              :innerStrokeColor="progressBar.innerStrokeColor"
            >
              <p class="progressTxt has-text-black">77%</p>
            </radial-progress-bar>
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="column tasks has-text-centered">
        <button class="button is-small" :disabled="todos" @click="todos = !todos">To Do</button>
        <button class="button is-small" :disabled="!todos" @click="todos = !todos">Done</button>
        <div class="taksContainer">
          <ol v-if="todos" class="todoList taskList has-text-left">
            <li class="todoListItem" v-for="task in tasks.todo" :key="task.name">
              {{task.name}}
              <a class="has-text-black" :href="'learn/'+task.type + '/' + task.id">
                <span class="icon is-pulled-right">
                  <i class="fas fa-edit"></i>
                </span>
              </a>
            </li>
          </ol>
          <ol v-if="!todos" class="doneList taskList has-text-left">
            <li class="doneListItem" v-for="task in tasks.done" :key="task.name">
              {{task.name}}
              <a class="has-text-black" :href="'learn/'+task.type + '/' + task.id">
                <span class="icon is-pulled-right">
                  <i class="fas fa-edit"></i>
                </span>
              </a>
            </li>
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
      descNav: {
        desc: true,
        picture: false,
        info: false
      },
      todos: true,
      projectName: "Project",
      progressBar: {
        startColor: "#5EFFFF",
        innerStrokeColor: "#73818B"
      },
      tasks: {
        todo: {
          1: { name: "Task #3", type: "course", id: "1" },
          2: { name: "Task #4", type: "course", id: "2" }
        },
        done: {
          1: { name: "Task #1", type: "page", id: "1" },
          2: { name: "Task #2", type: "unit", id: "1" }
        }
      }
    };
  },
  components: {
    RadialProgressBar
  },
  methods: {
    switchToDesc() {
      if (this.descNav.desc) {
        return;
      } else if (this.descNav.picture || this.descNav.info) {
        this.descNav.picture = this.descNav.info = false;
        this.descNav.desc = true;
      }
    },
    switchToPicture() {
      if (this.descNav.picture) {
        return;
      } else if (this.descNav.desc || this.descNav.info) {
        this.descNav.desc = this.descNav.info = false;
        this.descNav.picture = true;
      }
    },
    switchToInfo() {
      if (this.descNav.info) {
        return;
      } else if (this.descNav.picture || this.descNav.desc) {
        this.descNav.picture = this.descNav.desc = false;
        this.descNav.info = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  border-radius: 5%;
}
.about {
  height: 18vw;
  min-width: 255px;
  min-height: 300px;
  border-right: 1px solid black;
  background-color: #afb8be;
}
.progress {
  transform: translateY(22%);
  margin-bottom: 5px;
}
.tasks {
  height: 18vw;
  min-width: 250px;
  min-height: 300px;
  background-color: #a1a8ac;
}
.description {
  margin-top: 5%;
  margin-left: 2%;
  height: 111px;
  width: 220px;
  border: 1px solid black;
}
.days {
  font-size: 75%;
  margin-top: 5%;
}
.taskList {
  margin-left: 10%;
}
.todoListItem {
  list-style-type: disc;
}
.doneListItem {
  list-style-type: disc;
}
.description-nav {
  width: 100%;
  height: 100%;
  transform: scale(0.6, 0.6) translateY(25%);
}
</style>