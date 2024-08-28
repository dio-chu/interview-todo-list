<template>
  <CommonButton label="新增面試" size="lg" @click="handleAddInterview" />

  <CommonButton label="儲存" disabled @click="handleSave" />

  <CommonButton label="刪除" size="sm" @click="handleDelete" />
</template>

<script>
import CommonButton from "../../components/button/CommonButton.vue";
export default {
  components: {
    CommonButton,
  },
  methods: {
    handleAddInterview() {
      alert("新增面試");
      console.log("hi22");
    },
    handleSave() {
      alert("儲存");
    },
    handleDelete() {
      alert("刪除");
    },
  },
};
</script>
