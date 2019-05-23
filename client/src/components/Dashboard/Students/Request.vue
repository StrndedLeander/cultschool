<template>
  <div class="request container">
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
    <div class="requestForm has-text-centered">
      <label class="label">Surname Name</label>
      <div class="field">
        <div class="control">
          <div class="select">
            <select class="chooseActivity">
              <option default>Choose Activity</option>
              <option>Course #1</option>
              <option>Course #2</option>
              <option>Project #1</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Send Message..">
        </div>
      </div>
      <button type="button" class="button">Request</button>
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
.requestForm {
  padding: 0px;
  height: 60%;
  margin-top: 0px;
}
.request {
  width: 200px;
  height: 200px;
  background-color: #667581;
}
.columns {
  margin: 0;
  width: 99%;
  height: 25%;
}
.studentExp {
  margin-left: 35%;
}
.field {
  margin-left: 20px;
  width: 160px;
  height: 22px;
}
.is-mobile {
  margin: 0;
}
.control {
  width: 100%;
  height: 100%;
}
.input {
  width: 160px;
  height: 22px;
}
.studentProfile {
  padding: 0;
}
.chooseActivity {
  padding: 0px !important;
  line-height: 1em;
  width: 160px;
  height: 22px;
}
.button {
  margin-top: 6%;
  line-height: 1em;
  padding: 0px;
  width: 90px;
  height: 22px;
  border: 3px solid #b1e5ff;
  background-color: #7b8892;
  color: black;
}
</style>