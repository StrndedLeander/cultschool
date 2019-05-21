<template>
  <div class="navigation hero">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="profile">
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <div class="studentExp">
          <figure class="image is-50x50">
            <img src="https://via.placeholder.com/50">
          </figure>
        </div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="classes">
            <a class="navbar-item">Classes</a>
						
          </div>

          <div class="connect">
            <a class="navbar-item">Connect</a>
          </div>
        </div>

        <div class="navbar-end">
          <span class="icon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #bbbbbb;
  height: 70px;
}
.navbar {
	height: 70px;
}
.profile {
  margin-top: 27px;
  margin-right: 41px;
  margin-left: 20px;
  margin-bottom: 27px;
}
.studentExp {
  height: 50px;
  width: 50px;
  margin: 10px 0px 10px 0px;
  border: 1px solid black;
}
</style>