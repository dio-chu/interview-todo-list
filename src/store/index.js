import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { POSITIONS, STATUS_GROUP } from "../pages/homepage/constant";
import {
  getPositionLabelFromValue,
  getStatusLabelFromValue,
} from "../pages/homepage/utils/transform";
import { setPendingInterviewStatus } from "../pages/homepage/utils/statusUtils";

const state = {
  showAddModal: false,
  showEditModal: false,
  showDeleteModal: false,
  editItem: null,
  errors: {},
  selectFilter: "all",
  SearchTest: "",
  headers: [
    { title: "編輯", key: "edit" },
    { title: "公司名稱", key: "company" },
    { title: "面試職位", key: "position" },
    { title: "狀態", key: "status" },
    { title: "面試日期", key: "interviewDate" },
    { title: "更新日期", key: "updateDate" },
  ],
  data: [
    {
      id: 1,
      company: "104資訊科技",
      position: "前端工程師",
      status: "已錄取",
      interviewDate: "2024-08-08",
      updateDate: "2024-08-28",
      isSelected: false,
    },
    {
      id: 2,
      company: "404資訊科技",
      position: "網頁設計師",
      status: "等待面試",
      interviewDate: "2024-08-12",
      updateDate: "2024-08-28",
      isSelected: false,
    },
    {
      id: 3,
      company: "鴻海精密工業",
      position: "UI/UX設計師",
      status: "未錄取",
      interviewDate: "2024-08-01",
      updateDate: "2024-08-28",
      isSelected: false,
    },
  ],
  columnColors: {
    status: {
      已錄取: "#007EE2",
      等待結果: "#EC8500",
      未錄取: "#D82222",
      無聲卡: "#8F8F8F",
      等待面試: "#19B4B7",
    },
  },
};

const mutations = {
  //modal
  setShowAddModal(state, payload) {
    state.showAddModal = payload;
  },
  setShowEditModal(state, payload) {
    state.showEditModal = payload;
  },
  setShowDeleteModal(state, payload) {
    state.showDeleteModal = payload;
  },
  //interview
  toggleItemSelection(state, itemId) {
    const item = state.data.find((i) => i.id === itemId);
    if (item) {
      item.isSelected = !item.isSelected;
    }
  },
  toggleAllSelection(state, isSelected) {
    state.data.forEach((item) => {
      item.isSelected = isSelected;
    });
  },
  setErrors(state, errors) {
    state.errors = errors;
  },
  clearErrors(state) {
    state.errors = {};
  },
  deleteSelectedItems(state) {
    state.data = state.data.filter((item) => !item.isSelected);
  },
  addInterview(state, newItem) {
    state.data.push(newItem);
  },
  setEditItem(state, item) {
    state.editItem = item;
  },
  updateInterview(state, updatedItem) {
    const index = state.data.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      state.data.splice(index, 1, updatedItem);
    }
  },
  setSelectFilter(state, filter) {
    state.selectFilter = filter;
  },
  setSearchText(state, text) {
    state.searchText = text;
  },
};

const actions = {
  //modal
  toggleAddModal({ commit }, payload) {
    commit("setShowAddModal", payload);
  },
  toggleEditModal({ commit }, payload) {
    commit("setShowEditModal", payload);
  },
  toggleDeleteModal({ commit }, payload) {
    commit("setShowDeleteModal", payload);
  },
  //interview
  toggleItemSelection({ commit }, itemId) {
    commit("toggleItemSelection", itemId);
  },
  toggleAllSelection({ commit }, isSelected) {
    commit("toggleAllSelection", isSelected);
  },
  deleteSelectedItems({ commit }) {
    commit("deleteSelectedItems");
  },
  addInterview({ commit }, formData) {
    const positionLabel = getPositionLabelFromValue(
      formData.position,
      POSITIONS
    );
    const newItem = {
      id: uuidv4(),
      company: formData.company,
      position: positionLabel,
      status: "none",
      interviewDate: formData.interviewDate,
      updateDate: new Date().toISOString().split("T")[0],
      isSelected: false,
    };
    const initialStatus = setPendingInterviewStatus(
      newItem.status,
      formData.interviewDate
    );
    newItem.status = initialStatus;
    commit("addInterview", newItem);
  },
  setEditItem({ commit }, item) {
    commit("setEditItem", item);
  },
  updateInterview({ commit }, updatedItem) {
    const positionLabel = getPositionLabelFromValue(
      updatedItem.position,
      POSITIONS
    );
    const statusLabel = getStatusLabelFromValue(
      updatedItem.status,
      STATUS_GROUP
    );
    const updatedData = {
      ...updatedItem,
      position: positionLabel,
      status: statusLabel,
      updateDate: new Date().toISOString().split("T")[0], // 更新日期
    };
    const finalStatus = setPendingInterviewStatus(
      updatedData.status,
      updatedData.interviewDate
    );
    updatedData.status = finalStatus;
    console.log("final" + updatedData.status);
    commit("updateInterview", updatedData);
  },
  setSelectFilter({ commit }, filter) {
    commit("setSelectFilter", filter);
  },
  setSearchText({ commit }, text) {
    commit("setSearchText", text);
  },
};
const getters = {
  anyItemSelected: (state) => state.data.some((item) => item.isSelected),
  isAllSelected: (state) => state.data.every((item) => item.isSelected),
  //排序相關
  sortedData: (state) => {
    return state.data.slice().sort((a, b) => {
      return new Date(b.interviewDate) - new Date(a.interviewDate);
    });
  },
  filteredData: (state, getters) => {
    if (state.selectFilter === "all") {
      return getters.sortedData;
    } else if (state.selectFilter === "interviewed") {
      return getters.sortedData.filter(
        (item) => item.status === "等待面試" || item.status === "等待結果"
      );
    } else if (state.selectFilter === "resulted") {
      return getters.sortedData.filter((item) =>
        ["已錄取", "未錄取", "無聲卡"].includes(item.status)
      );
    } else {
      return [];
    }
  },
  searchedData: (state, getters) => {
    if (!state.searchText) {
      return getters.filteredData;
    }
    const searchLower = state.searchText.toLowerCase();
    return getters.filteredData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchLower)
      )
    );
  },
  processedData: (_, getters) => {
    return getters.searchedData;
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
