export default {
  namespaced: true,
  state: {
    id: "",
    username: "",
    teacher: { isTeacher: false, material: "", rating: "" },
    courses: [{ id: "c_1", name: "Course #1", topic: "Linear Algebra", progress: 10, teacher: "Leander van Diepen", suggestedLvl: 30, noStudents: 257, likes: 23 },
    { id: "c_2", topic: "Ecology", name: "Course #2", progress: 25, teacher: "Leander van Diepen", suggestedLvl: 30, noStudents: 257, likes: 23 },
    { id: "c_3", topic: "Organic Chemistry", name: "Course #3", progress: 60, teacher: "Leander van Diepen", suggestedLvl: 60, noStudents: 89, likes: 21 },
    { id: "c_4", topic: "Organic Chemistry", name: "Course #3", progress: 60, teacher: "Leander van Diepen", suggestedLvl: 60, noStudents: 89, likes: 21 }],
    projects: [{ name: "Project #1" }],
    unities: [{ name: "Unity #1" }],
    subjects: [{ category: "", level: "" }],

  },
  getters: {

  },
  actions: {},
  mutations: {}
}