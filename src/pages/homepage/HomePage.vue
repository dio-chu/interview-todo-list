<template>
  <AddInterviewModal
    :isVisible="showAddModal"
    @close-modal="toggleAddModal(false)"
    @submit-form="handleFormSubmit"
  />
  <EditInterviewModal
    :isVisible="showEditModal"
    @close-modal="toggleEditModal(false)"
    @update-form="handleUpdateForm"
  />
  <DeleteInterviewModal
    :isVisible="showDeleteModal"
    @close-modal="toggleDeleteModal(false)"
    @confirm-delete="handleConfirmDelete"
  />
  <div class="interview-management">
    <div class="interview-managementactions">
      <CommonButton label="新增面試" size="lg" @click="toggleAddModal(true)" />
    </div>
    <div class="interview-managementfilters">
      <CommonSelect :options="selectData" v-model="selectFilterModel" />
      <TextField
        v-model="searchTextModel"
        placeholder="請輸入欲搜尋內容"
        :width="300"
        :prependInnerIcon="magnify"
      />
    </div>
    <div class="interview-managementlist-container">
      <ListContainer />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommonButton from "../../components/button/CommonButton.vue";
import CommonSelect from "../../components/select/CommonSelect.vue";
import TextField from "../../components/textfield/TextField.vue";
import ListContainer from "./containers/ListContainer.vue";
import magnify from "../../assets/magnify.svg";
import AddInterviewModal from "./components/modal/AddInterviewModal.vue";
import EditInterviewModal from "./components/modal/EditInterviewModal.vue";
import DeleteInterviewModal from "./components/modal/DeleteInterviewModal.vue";
import { SELECT_DATA } from "./constant";

export default {
  components: {
    CommonButton,
    CommonSelect,
    TextField,
    ListContainer,
    AddInterviewModal,
    EditInterviewModal,
    DeleteInterviewModal,
  },
  data() {
    return {
      magnify,
      selectData: SELECT_DATA,
    };
  },
  computed: {
    ...mapState("modal", ["showAddModal", "showDeleteModal", "showEditModal"]),
    ...mapState("interview", ["selectFilter", "searchText"]),
    selectFilterModel: {
      get() {
        return this.selectFilter;
      },
      set(value) {
        this.setSelectFilter(value);
      },
    },
    searchTextModel: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.setSearchText(value);
      },
    },
  },
  methods: {
    ...mapActions("modal", [
      "toggleAddModal",
      "toggleDeleteModal",
      "toggleEditModal",
    ]),
    ...mapActions("interview", ["setSelectFilter", "setSearchText"]),
    handleFormSubmit(formData) {
      this.$store.dispatch("interview/addInterview", formData);
      this.toggleAddModal(false);
    },
    handleUpdateForm(updatedData) {
      this.$store.dispatch("interview/updateInterview", updatedData);
      this.toggleEditModal(false);
    },
    handleConfirmDelete() {
      this.$store.dispatch("interview/deleteSelectedItems");
    },
  },
};
</script>

<style scoped>
.interview-management {
  padding: 20px;
}
.interview-managementactions {
  margin-bottom: 1rem;
}
.interview-managementfilters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.interview-managementlist-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
