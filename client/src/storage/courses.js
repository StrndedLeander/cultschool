
export default {
  namespaced: true,
  state: {
    courses: [{
      title: "", subject: "", creator: "", units: [{
        name: "", lessons: [{
          index: "", name: "", lessonType: "", pages: [{
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
            columns: number
          }]
        }]
      }]
    }]
  },
  getters: {},
  actions: {},
  mutations: {}
}