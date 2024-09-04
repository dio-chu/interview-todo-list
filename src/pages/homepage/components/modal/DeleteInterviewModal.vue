<template>
  <CommonModal
    :isVisible="isVisible"
    @close-modal="closeModal"
    title="確定刪除？"
    :width="350"
  >
    <div class="modal-content">
      <p>刪除的面試紀錄無法恢復</p>
      <CommonButton size="sm" label="確認" @click="confirmDelete" /></div
  ></CommonModal>
</template>

<script>
import CommonButton from "../../../../components/button/CommonButton.vue";
import CommonModal from "../../../../components/modal/CommonModal.vue";
export default {
  name: "DeleteInterviewModal",
  components: {
    CommonButton,
    CommonModal,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    confirmDelete() {
      this.$emit("confirm-delete");
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.modal-content button {
  margin-top: 1rem;
}
</style>
