<template>
  <div class="interview-management">
    <div class="interview-managementactions">
      <CommonButton label="新增面試" size="lg" @click="toggleAddModal(true)" />
    </div>
    <div class="interview-managementfilters">
      <CommonSelect :options="selectData" v-model="selected" />
      <TextField
        v-model="searchText"
        placeholder="請輸入欲搜尋內容"
        :width="300"
        :prependInnerIcon="magnify"
      />
    </div>
    <div class="interview-managementlist-container">
      <ListContainer />
    </div>
    <CommonModal v-model:isVisible="showAddModal" title="新增面試" :width="400">
      <AddInterviewModal @form-submitted="toggleAddModal(false)" />
    </CommonModal>
    <CommonModal
      v-model:isVisible="showDeleteModal"
      title="確定刪除？"
      :width="350"
    >
      <DeleteInterviewModal @item-deleted="toggleDeleteModal(false)" />
    </CommonModal>
    <CommonModal
      v-model:isVisible="showEditModal"
      title="編輯面試"
      :width="480"
    >
      <EditInterviewModal
        :item="currentEditItem"
        @form-submitted="toggleEditModal(false)"
      />
    </CommonModal>
  </div>
</template>

<script>
import CommonButton from "../../components/button/CommonButton.vue";
import CommonSelect from "../../components/select/CommonSelect.vue";
import TextField from "../../components/textfield/TextField.vue";
import ListContainer from "./containers/ListContainer.vue";
import CommonModal from "../../components/modal/CommonModal.vue";
import AddInterviewModal from "./components/modal/AddInterviewModal.vue";
import DeleteInterviewModal from "./components/modal/DeleteInterviewModal.vue";
import EditInterviewModal from "./components/modal/EditInterviewModal.vue";
import magnify from "../../assets/magnify.svg";
import { SELECT_DATA } from "./constant";

export default {
  components: {
    CommonButton,
    CommonModal,
    CommonSelect,
    TextField,
    ListContainer,
    AddInterviewModal,
    DeleteInterviewModal,
    EditInterviewModal,
  },
  data() {
    return {
      magnify,
      selected: "all",
      searchText: "",
      selectData: SELECT_DATA,
    };
  },
  computed: {
    ...mapState({
      showAddModal: (state) => state.interview.showAddModal,
      showDeleteModal: (state) => state.interview.showDeleteModal,
      showEditModal: (state) => state.interview.showEditModal,
    }),
  },
  methods: {
    ...mapActions(["toggleAddModal", "toggleDeleteModal", "toggleEditModal"]),
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
