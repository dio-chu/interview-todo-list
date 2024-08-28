<template>
  <List
    :headers="headers"
    :data="listData"
    isCheckbox
    :columnColors="columnColors"
    @check="handleSelectionChange"
  >
    <template #edit="{ item }">
      <button @click="editItem(item)">編輯</button>
    </template>
    <template #status="{ item }">
      <span :class="getStatusClass(item.status)">{{ item.status }}</span>
    </template>
  </List>
</template>

<script>
import List from "../../components/list/List.vue";

export default {
  name: "TestListPage",
  components: {
    List,
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
      listData: [
        {
          id: 1,
          company: "104資訊科技",
          position: "前端工程師",
          status: "已錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
        },
        {
          id: 2,
          company: "104資訊科技",
          position: "前端工程師",
          status: "已錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
        },
        {
          id: 3,
          company: "104資訊科技",
          position: "前端工程師",
          status: "已錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
        },
        {
          id: 4,
          company: "ABC科技",
          position: "後端工程師",
          status: "待面試",
          interviewDate: "2024/8/15",
          updateDate: "2024/8/20",
        },
        {
          id: 5,
          company: "XYZ公司",
          position: "UI設計師",
          status: "已拒絕",
          interviewDate: "2024/8/10",
          updateDate: "2024/8/22",
        },
      ],
      columnColors: {
        status: {
          已錄取: "green-text",
          待面試: "blue-text",
          已拒絕: "red-text",
        },
      },
    };
  },
  methods: {
    handleSelectionChange(selectedItems) {
      console.log("Selected items:", selectedItems);
    },
    getStatusClass(status) {
      return this.columnColors.status[status] || "";
    },
    editItem(item) {
      console.log("Editing item:", item);
    },
  },
};
</script>
