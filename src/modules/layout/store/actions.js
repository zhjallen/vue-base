const actions = {
  collapseSidebar({
    commit
  }, sidebarStatus) {
    commit('SET_COLLAPSE_SIDEBAR', sidebarStatus)
  },
  hideSidebar({
    commit
  }, isHidden) {
    commit('SET_HIDDEN_SIDEBAR', isHidden)
  },

  setTheme({
    commit
  }, theme) {
    commit('SET_THEME', theme)
  },
  addTag({
    commit
  }, tag) {
    commit("ADD_TAG", tag)
  },
  removeTag({
    commit
  }, tag) {
    commit("REMOVE_TAG", tag)
  },
}
export default actions;