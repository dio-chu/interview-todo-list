<template>
  <div class="interview-management">
    <div class="interview-management__actions mb-4">
      <CommonButton label="新增面試" size="lg" @click="handleAddInterview" />
    </div>

    <div class="interview-management__filters flex justify-between mb-4">
      <CommonSelect :options="selectData" v-model="selected" />
      <TextField
        v-model="searchText"
        placeholder="請輸入欲搜尋內容"
        :width="300"
        @blur="handleSearch"
        :prependInnerIcon="magnify"
      />
    </div>

    <div class="interview-management__list-container">
      <ListContainer @edit-item="handleEditItem" />
    </div>
    <CommonModal
      v-model:isVisible="showModal"
      title="新增面試"
      :width="400"
      @close-modal="closeModal"
    >
      <AddInterviewModal @form-submitted="closeModal" />
    </CommonModal>
  </div>
</template>

<script>
import CommonButton from "../../components/button/CommonButton.vue";
import CommonSelect from "../../components/select/CommonSelect.vue";
import TextField from "../../components/textfield/TextField.vue";
import ListContainer from "./containers/ListContainer.vue";
import CommonModal from "../../components/modal/CommonModal.vue";
import AddInterviewModal from "./modal/AddInterviewModal.vue";
import magnify from "../../assets/magnify.svg";

export default {
  components: {
    CommonButton,
    CommonModal,
    CommonSelect,
    TextField,
    ListContainer,
    AddInterviewModal,
  },
  data() {
    return {
      magnify,
      showModal: false,
      selected: "all", //select之後放入vuex 切換select 內容
      searchText: "",
      selectData: [
        { id: "1", value: "all", label: "全部" },
        { id: "2", value: "interviewed", label: "已安排面試" },
        { id: "3", value: "resulted", label: "已有結果" },
      ],
    };
  },
  methods: {
    handleAddInterview() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleSearch() {
      console.log("Searching for:", this.searchText);
    },
    handleEditItem(item) {
      console.log("Editing item:", item);
    },
  },
};
</script>

<style scoped>
.interview-management {
  padding: 20px;
}

.interview-management__actions {
  margin-bottom: 1rem;
}

.interview-management__filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.interview-management__list-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
