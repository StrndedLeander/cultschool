export default {
  namespaced: true,
  state: {
    id: "",
    username: "",
    teacher: { isTeacher: false, material: "", rating: "" },
    courses: [{ name: "Course #1" }, { name: "Course #2" }, { name: "Course #3" }],
    projects: [{ name: "Project #1" }],
    subjects: [{category: "", level: ""}],

  },
  getters: {

  },
  actions: {},
  mutations: {}
}