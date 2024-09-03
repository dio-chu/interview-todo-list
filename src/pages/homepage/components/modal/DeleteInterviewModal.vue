<template>
  <div>
    <div class="modal-content">
      <p>刪除的面試紀錄無法恢復</p>
      <CommonButton size="sm" label="確認" @click="confirmDelete" />
    </div>
  </div>
</template>

<script>
import CommonButton from "../../../../components/button/CommonButton.vue";

export default {
  components: {
    CommonButton,
  },
  methods: {
    ...mapActions("interview", ["deleteSelectedItems", "toggleDeleteModal"]),
    confirmDelete() {
      this.deleteSelectedItems();
      this.toggleDeleteModal(false); // 關閉刪除模態窗
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
