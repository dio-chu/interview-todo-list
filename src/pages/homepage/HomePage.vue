<template>
  <div class="interview-management">
    <div class="interview-managementactions mb-4">
      <CommonButton label="新增面試" size="lg" @click="handleAddInterview" />
    </div>
    <div class="interview-managementfilters flex justify-between mb-4">
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
    <CommonModal
      v-model:isVisible="showModal"
      title="新增面試"
      :width="400"
      @close-modal="closeModal"
    >
      <AddInterviewModal />
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
import { selectData } from "../../data";

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
      selected: "all",
      searchText: "",
      selectData,
    };
  },
  methods: {
    handleAddInterview() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
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
