import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  strict: true,
  state: {
    header_message: "추가",
    current_menu : ''
  },
  mutations: {
    setHeaderMessage (state, message) {
      state.header_message = message
    },
    setCurrentMenu (state, menu) {
      state.header_message = menu
    }
  }
})

export default Store;