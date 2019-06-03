export default {
  namespaced: true,
  state: {
    coursesInformation: [{
      id: "crs1",
      subject: "Subject",
      creator: "Creator",
      courseName: "Course #1",
      description: "",
      imageSrc: "https://via.placeholder.com/214x120",
      units: [
        {
          index: "1",
          id: "un1",
          name: "Unit #1",
          lessons: [{ index: "1.1", id: "ls1", name: "Lektion #1.1", pages: [{ index: "1.1.1", id: "pg1", name: "Page #1.1.1" }] }]
        },
        { index: "2", id: "un2", name: "Unit #2", lessons: [] },
        { index: "3", id: "un3", name: "Unit #3", lessons: [] },
        { index: "4", id: "un4", name: "Unit #4", lessons: [] },
        { index: "5", id: "un5", name: "Unit #5", lessons: [] }
      ],
      belegt: 1000,
      absolviert: 150,
      progress: 30
    }, {
      id: "2",
      subject: "Subject",
      creator: "Creator",
      courseName: "Course #2",
      description: "",
      imageSrc: "https://via.placeholder.com/214x120",
      units: [
        {
          index: "1",
          name: "Unit #1",
          lessons: [{ index: "1.1", name: "Lektion #1.1" }]
        },
        { index: "2", name: "Unit #2", lessons: [] },
        { index: "3", name: "Unit #3", lessons: [] },
        { index: "4", name: "Unit #4", lessons: [] },
        { index: "5", name: "Unit #5", lessons: [] }
      ],
      belegt: 1000,
      absolviert: 150,
      progress: 30
    }],
    coursesData: [{
      id: "", title: "", subject: "", creator: "", units: [{
        id: "", name: "", lessons: [{
          id: "", index: "", name: "", lessonType: "", pages: [{
            id: "",
            type: "",
            font: "",
            fontSize: 12,
            text: "",
            xOrientation: 0,
            yOrientation: 0,
            width: 0,
            height: 0,
            align: "",
            indent: 30, // the amount in PDF points (72 per inch) to indent each paragraph of text
            columns: 1
          }]
        }]
      }]
    }]
  },
  getters: {

  },
  actions: {
    getInfoById({ state }, id) {
      var course = state.coursesInformation.filter(el => {
        return el.id == id
      })
      // console.log(id,course)
      return course
    }
  },
  mutations: {}
}