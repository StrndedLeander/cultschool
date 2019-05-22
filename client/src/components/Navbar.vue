<template>
  <div class="navigation hero is-desktop">
    <nav class="navbar has-text-centered" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="profile" to="#">
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
        </router-link>
        <StudentsExp class="studentsExp"></StudentsExp>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbars"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbars">
        <div class="navbar-start">
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
        <div class="navbar-end">
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
      </div>
    </nav>
  </div>
</template>

<script>
import StudentsExp from "./Students/Experience";
export default {
  components: {
    StudentsExp
  },
  methods: {
    toggleMenu(e) {
      e.target.classList.toggle("is-active");

      const target = e.target.dataset.target;
      console.log(target);
      const $target = document.getElementById(target);

      $target.classList.toggle("is-active");
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #bbbbbb;
  width: 100%;
  height: 70px;
}
.navbar {
  width: 100%;
  height: 70px;
}
.navbar-brand {
  width: 25%;
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
a p {
  margin-top: 25%;
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