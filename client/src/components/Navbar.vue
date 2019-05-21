<template>
  <div class="navigation hero is-desktop">
    <nav class="navbar has-text-centered" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link>
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
        </router-link>
      </div>
      <div class="navbar-menu">
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
        <div class="navbar-end"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
}
.navbar-brand {
  width: 25%;
  border: 1px solid black;
}
.navbar-start {
  width: 66.67%;
  border: 1px solid black;
}
.navbar-end {
  width: 33.3%;
  border: 1px solid black;
}
.classes{
  margin-left: 3%;
}
.courses{
  margin-left: 10%;
}
a {
  margin-right: 15%;
}
a p {
  margin-top: 25%;
}
.navigation {
  background-color: #bbbbbb;
  width: 100%;
  height: 70px;
}
.column {
  border: 1px solid black;
}
.navbar {
  height: 70px;
}
a {
  color: #667581;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}
.fa-chevron-down {
  color: #f5f5f5;
}
.studentExp {
  border: 1px solid black;
}
</style>