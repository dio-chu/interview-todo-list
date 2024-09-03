<template>
  <CommonButton
    class="list-container__delete-button"
    label="刪除"
    size="sm"
    :disabled="!anyItemSelected"
  />
  <List
    :headers="headers"
    :data="data"
    needShowCheckbox
    :columnColors="columnColors"
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
  <CommonModal v-model:isVisible="showModal" title="確定刪除？" :width="350">
    <DeleteInterviewModal @item-deleted="handleDelete" />
  </CommonModal>
  <CommonModal v-model:isVisible="showEditModal" title="編輯面試" :width="480">
    <EditInterviewModal :item="currentEditItem" @form-submitted="closeModal" />
  </CommonModal>
</template>

<script>
import CommonButton from "../../../components/button/CommonButton.vue";
import List from "../../../components/list/List.vue";
import IconButton from "../../../components/button/IconButton.vue";
import CommonModal from "../../../components/modal/CommonModal.vue";
import DeleteInterviewModal from "../modal/DeleteInterviewModal.vue";
import EditInterviewModal from "../modal/EditInterviewModal.vue";
import pencilIcon from "../../../assets/pencil.svg";
import { data, headers, columnColors } from "../../../data";

export default {
  components: {
    CommonButton,
    List,
    IconButton,
    CommonModal,
    DeleteInterviewModal,
    EditInterviewModal,
  },
  data() {
    return {
      pencilIcon,
      showModal: false,
      showEditModal: false,
      currentEditItem: null,
      headers: headers,
      data,
      columnColors,
      isAllSelected: false,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.showEditModal = false;
    },

    editItem(item) {
      this.showEditModal = true;
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
