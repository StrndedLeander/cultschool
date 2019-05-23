<template>
  <div class="getRequest container">
    <div class="columns is-mobile">
      <div class="studentProfile column">
        <figure class="image is-64x64">
          <img src="https://via.placeholder.com/64">
        </figure>
      </div>
      <div class="studentExp column">
        <StudentExp></StudentExp>
      </div>
    </div>
    <div class="requestForm">
      <label class="label has-text-centered">Surname Name</label>
      <article class="message">
        <div class="message-header">
          <p>Course #1</p>
        </div>
        <div class="message-body has-text-justified">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          tempus quis placerat ut
        </div>
      </article>
      <div class="field is-grouped">
        <div class="control">
          <button type="button" class="button accept">Accept</button>
        </div>
        <div class="control">
          <button type="button" class="button decline">Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentExp from "../../Students/Experience";
export default {
  components: {
    StudentExp
  }
};
</script>

<style lang="scss" scoped>
.getRequest {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 200px;
  background-color: #667581;
}
.studentProfile {
  padding: 0;
}
.columns {
  margin: 0;
  width: 100%;
  height: 25%;
}
.field {
  margin: 0;
  padding: 0;
  width: 200px;
}
.studentExp {
  margin-left: 35%;
}
.message {
  padding: 0;
  width: 160px;
  height: 60%;
  margin: auto;
}

.message-header {
  font-size: 12px;
  height: 10px;
}
.message-body {
  font-size: 11px;
  overflow-y: auto;
  height: 38px;
  padding: 0;
}
.button {
  line-height: 1em;
  padding: 0px;
  width: 90px;
  height: 22px;
  background-color: #7b8892;
  color: black;
}
.accept {
	margin-left: 4px;
  border: 3px solid #5bcd72;
}
.decline {
  border: 3px solid #ff7777;
}
</style>