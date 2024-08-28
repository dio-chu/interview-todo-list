<!-- TestPage.vue -->
<template>
  <div>
    <button @click="toggleAllItems">
      {{ isAllSelected ? "全部關閉" : "全部開啟" }}
    </button>
    <ListItem
      v-for="item in listData"
      :key="item.id"
      :item="item"
      :headers="headers"
      isCheckbox
      :isSelected="selectedItems[item.id]"
      :colors="columnColors"
      @toggleItem="toggleItem(item.id)"
    >
      <template #edit="{ item }">
        <button @click="editItem(item)">編輯</button>
      </template>
    </ListItem>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import ListItem from "../../components/list/item/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  setup() {
    const headers = [
      { title: "編輯", key: "edit" },
      { title: "公司名稱", key: "company" },
      { title: "面試職位", key: "position" },
      { title: "狀態", key: "status" },
      { title: "面試日期", key: "interviewDate" },
      { title: "更新日期", key: "updateDate" },
    ];

    const listData = ref([
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
    ]);

    const columnColors = reactive({
      status: {
        已錄取: "blue-text",
        待面試: "green-text",
        已拒絕: "red-text",
      },
    });

    const selectedItems = reactive({});

    // 初始化 selectedItems
    listData.value.forEach((item) => {
      selectedItems[item.id] = false;
    });

    const isAllSelected = computed(() => {
      return Object.values(selectedItems).every((value) => value === true);
    });

    const toggleAllItems = () => {
      const newValue = !isAllSelected.value;
      Object.keys(selectedItems).forEach((id) => {
        selectedItems[id] = newValue;
      });
    };

    const toggleItem = (id) => {
      selectedItems[id] = !selectedItems[id];
    };

    const editItem = (item) => {
      console.log("Editing item:", item);
    };

    return {
      headers,
      listData,
      isAllSelected,
      selectedItems,
      columnColors,
      toggleAllItems,
      toggleItem,
      editItem,
    };
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #7696d1;

  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease-out;
}

button:hover {
  background-color: #45a049;
}
</style>
