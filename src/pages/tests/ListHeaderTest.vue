<template>
  <ListHeader
    :headers="headers"
    isCheckbox
    v-model="isAllSelected"
  ></ListHeader>
</template>

<script>
import ListHeader from "../../components/list/header/ListHeader.vue";

export default {
  components: {
    ListHeader,
  },
  data() {
    return {
      headers: [
        { title: "編輯", key: "edit" },
        { title: "公司名稱", key: "company" },
        { title: "面試職位", key: "position" },
        { title: "狀態", key: "status" },
        { title: "面試日期", key: "interviewDate" },
        { title: "更新日期", key: "updateDate" },
      ],
      isAllSelected: false,
    };
  },
  watch: {
    isAllSelected(newValue) {
      // 這裡您可以添加邏輯來處理所有項目的選中狀態
      console.log("All items selected:", newValue);
    },
  },
};
</script>
