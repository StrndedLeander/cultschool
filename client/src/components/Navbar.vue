<template>
  <div class="navigation hero">
    <nav class="navbar has-text-centered" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div v-if="userLoggedIn">
          <router-link class="profile" to="#">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
          </router-link>
          <StudentsExp class="studentsExp"></StudentsExp>
        </div>
        <div v-else>
          <p>KultSchool</p>
        </div>
        <div class="dropdown is-hidden-desktop" v-bind:class="{'is-active': touchMenu}">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="touch-menu"
              @click="toggleTouchMenu"
            >
              <span>Content</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="dropdown-menu" id="touch-menu" role="menu">
              <div class="dropdown-content is-pulled-left">
                <a class="dropdown-item">
                  CLASSES
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </a>
                <a class="dropdown-item">
                  CONNECT
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </a>
                <a class="dropdown-item">
                  COURSES
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </a>
                <hr class="dropdown-divider" />
                <a class="dropdown-item">EXPLORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-menu" id="navbars">
        <div class="navbar-start is-hidden-touch">
          <a class="nav-item classes">
            <p>CLASSES</p>
            <span class="icon">
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <a class="nav-item connect">
            <p>CONNECT</p>
            <span class="icon">
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <a class="nav-item courses">
            <p>COURSES</p>
            <span class="icon">
              <i class="fas fa-chevron-down"></i>
            </span>
          </a>
          <a class="nav-item explore">
            <p>EXPLORE</p>
          </a>
        </div>
        <div class="navbar-end" v-if="userLoggedIn">
          <a class="navEnd">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
          </a>
          <a class="navEnd">
            <span class="icon">
              <i class="fas fa-bell"></i>
            </span>
          </a>
          <a class="navEnd">
            <span class="icon">
              <i class="fas fa-heart"></i>
            </span>
          </a>
        </div>
        <div v-else>
          <router-link class="signBtn button has-background-grey has-text-white" to="/login">Sign In</router-link>
          <router-link
            class="signBtn button has-background-grey-dark has-text-white"
            to="/register"
          >Sign Up</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import StudentsExp from "./Students/Experience";
import { mapState } from "vuex";
export default {
  data() {
    return {
      touchMenu: false
    };
  },
  components: {
    StudentsExp
  },
  computed: {
    ...mapState("auth", {
      userLoggedIn: state => state.userLoggedIn
    })
  },
  methods: {
    toggleTouchMenu() {
      this.touchMenu = !this.touchMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1023.5px) {
  .is-hidden-touch {
    display: none !important;
  }
  .navbar-brand {
    width: 100%;
    height: 100%;
  }
  .dropdown {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important;
  }
  .navbar-brand {
    width: 25%;
    height: 100%;
  }
}
.signBtn {
  transform: scale(0.85, 0.85);
  margin-top: 10%;
}
.studentsExp {
  margin-top: 0.5rem;
}
.navigation {
  background-color: #bbbbbb;
  width: 100%;
  height: 70px;
}
.navbar {
  width: 100%;
  height: 100%;
}
.navbar-start {
  width: 67%;
}
.navbar-end {
  width: 33%;
}
.nav-item {
  width: 25%;
  margin-right: 15%;
  color: #667581;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}
.classes {
  margin-left: 3%;
}
.courses {
  margin-left: 10%;
}
.navbar-start > .nav-item {
  margin-top: 2%;
}
.profile {
  margin-left: 1rem;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
  color: black;
}
.navEnd {
  color: black;
  margin-top: 1.5rem;
  margin-right: 0.5rem;
}
.fa-chevron-down {
  color: #f5f5f5;
}
</style>