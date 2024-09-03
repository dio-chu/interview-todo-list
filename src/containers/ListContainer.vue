<template>
  <CommonButton
    class="list-container__delete-button"
    label="刪除"
    size="sm"
    :disabled="!anyItemSelected"
    @click="openModal"
  />
  <List
    :headers="headers"
    :data="data"
    needShowCheckbox
    :columnColors="columnColors"
    :isAllSelected="isAllSelected"
    @toggle-item="toggleItem"
    @toggle-all="toggleAllItems"
  >
    <template v-slot:edit="{ item }">
      <IconButton
        :disabled="false"
        :icon="pencilIcon"
        isClickable
        @click="editItem(item)"
      />
    </template>

    <template v-slot:status="{ item }">
      <span :style="{ color: columnColors.status[item.status] }">
        {{ item.status }}
      </span>
    </template>
  </List>
  <CommonModal
    v-model:isVisible="showModal"
    title="確定刪除？"
    :width="350"
    @close-modal="closeModal"
  >
    <DeleteInterviewModal @item-deleted="handleDelete" />
  </CommonModal>
  <CommonModal
    v-model:isVisible="showEditModal"
    title="編輯面試"
    :width="480"
    @close-modal="closeModal"
  >
    <EditInterviewModal :item="currentEditItem" @form-submitted="closeModal" />
  </CommonModal>
</template>

<script>
import CommonButton from "../components/button/CommonButton.vue";
import List from "../components/list/List.vue";
import IconButton from "../components/button/IconButton.vue";
import CommonModal from "../components/modal/CommonModal.vue";
import DeleteInterviewModal from "../modal/DeleteInterviewModal.vue";
import EditInterviewModal from "../modal/EditInterviewModal.vue";
import pencilIcon from "../assets/pencil.svg";
// 之後放入 Vuex
import { mockData } from "../data";

export default {
  components: {
    CommonButton,
    List,
    IconButton,
    CommonModal,
    DeleteInterviewModal,
    EditInterviewModal,
  },
  emits: ["edit-item"], // 明確宣告自定義事件
  data() {
    return {
      pencilIcon,
      showModal: false,
      showEditModal: false,
      currentEditItem: null,
      headers: [
        { title: "編輯", key: "edit" },
        { title: "公司名稱", key: "company" },
        { title: "面試職位", key: "position" },
        { title: "狀態", key: "status" },
        { title: "面試日期", key: "interviewDate" },
        { title: "更新日期", key: "updateDate" },
      ],
      data: mockData,
      columnColors: {
        status: {
          已錄取: "#007EE2",
          等待結果: "#EC8500",
          未錄取: "#D82222",
        },
      },
      isAllSelected: false,
    };
  },
  computed: {
    anyItemSelected() {
      return this.data.some((item) => item.isSelected);
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.showEditModal = false;
      this.currentEditItem = null;
    },
    toggleItem(itemId) {
      const item = this.data.find((i) => i.id === itemId);
      if (item) {
        item.isSelected = !item.isSelected;
        this.isAllSelected = this.data.every((i) => i.isSelected);
      }
    },
    toggleAllItems(isChecked) {
      this.isAllSelected = isChecked;
      this.data.forEach((item) => {
        item.isSelected = isChecked;
      });
    },
    editItem(item) {
      this.currentEditItem = item;
      this.showEditModal = true;
    },
    handleDelete() {
      this.data = this.data.filter((item) => !item.isSelected);
      this.showModal = false;
    },
  },
};
</script>

<style>
.list-container__delete-button {
  margin-left: 2%;
  margin-bottom: -10px;
}
</style>
