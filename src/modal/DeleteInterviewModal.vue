<template>
  <div>
    <div class="modal-content">
      <p>刪除的面試紀錄無法恢復</p>
      <CommonButton size="sm" label="確認" @click="handleDelete" />
    </div>
  </div>
</template>

<script>
import CommonModal from "../components/modal/CommonModal.vue";
import CommonButton from "../components/button/CommonButton.vue";

export default {
  components: {
    CommonModal,
    CommonButton,
  },

  methods: {
    handleDelete() {
      this.$emit("item-deleted");
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
