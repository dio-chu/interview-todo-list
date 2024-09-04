const state = {
  showAddModal: false,
  showEditModal: false,
  showDeleteModal: false,
};

const mutations = {
  setShowAddModal(state, payload) {
    state.showAddModal = payload;
  },
  setShowEditModal(state, payload) {
    state.showEditModal = payload;
  },
  setShowDeleteModal(state, payload) {
    state.showDeleteModal = payload;
  },
};

const actions = {
  toggleAddModal({ commit }, payload) {
    commit("setShowAddModal", payload);
  },
  toggleEditModal({ commit }, payload) {
    commit("setShowEditModal", payload);
  },
  toggleDeleteModal({ commit }, payload) {
    commit("setShowDeleteModal", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
