<template>
  <div class="navbar hero">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="columns">
            <div class="column is-one-fifth">
              <div class="columns">
                <div class="column">
                  <span class="icon">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <div class="column">
                  <figure class="image is-50x50">
                    <img src="https://bulma.io/images/placeholders/50x50.png">
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <a class="navbar-item">Home</a>

          <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>

              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>