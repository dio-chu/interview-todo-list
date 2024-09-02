<template>
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
      <button @click="editItem(item)">編輯</button>
    </template>

    <template v-slot:status="{ item }">
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
      data: [
        {
          id: 1,
          company: "104資訊科技",
          position: "前端工程師",
          status: "已錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
          isSelected: false,
        },
        {
          id: 2,
          company: "104資訊科技",
          position: "前端工程師",
          status: "未錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
          isSelected: false,
        },
        {
          id: 3,
          company: "104資訊科技",
          position: "前端工程師",
          status: "已錄取",
          interviewDate: "2024/8/08",
          updateDate: "2024/8/28",
          isSelected: false,
        },
        {
          id: 4,
          company: "ABC科技",
          position: "後端工程師",
          status: "等待結果",
          interviewDate: "2024/8/15",
          updateDate: "2024/8/20",
          isSelected: false,
        },
        {
          id: 5,
          company: "XYZ公司",
          position: "UI設計師",
          status: "未錄取",
          interviewDate: "2024/8/10",
          updateDate: "2024/8/22",
          isSelected: false,
        },
      ],
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
  methods: {
    toggleItem(itemId) {
      const item = this.data.find((i) => i.id === itemId);
      if (item) {
        item.isSelected = !item.isSelected;
        this.isAllSelected = this.data.every((i) => i.isSelected);
        console.log("Selected item:", item);
      }
    },
    toggleAllItems(isChecked) {
      this.isAllSelected = isChecked;
      this.data.forEach((item) => {
        item.isSelected = isChecked;
      });
      console.log("All items selected:", isChecked);
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
