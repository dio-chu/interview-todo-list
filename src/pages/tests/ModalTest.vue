<template>
  <div>
    <CommonButton label="刪除" @click="isModalshow = true" />
    <CommonModal
      v-model:isVisible="isModalshow"
      title="確定刪除？"
      :width="350"
      :overlayOpacity="0.4"
      @close-modal="handleDelete"
    >
      <div class="modal-content">
        <p>刪除的面試紀錄無法恢復</p>
        <CommonButton size="sm" label="確認" @click="handleDelete" />
      </div>
    </CommonModal>
  </div>
</template>

<script>
import { ref } from "vue";
import CommonModal from "../../components/modal/CommonModal.vue";
import CommonButton from "../../components/button/CommonButton.vue";

export default {
  components: {
    CommonModal,
    CommonButton,
  },
  setup() {
    const isModalshow = ref(false);
    const handleDelete = () => {
      // 處理刪除邏輯
      isModalshow.value = false;
    };

    return {
      isModalshow,
      handleDelete,
    };
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
