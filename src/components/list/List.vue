<template>
  <div class="list-container">
    <ListHeader
      :headers="headers"
      :isCheckbox="isCheckbox"
      :modelValue="isAllSelected"
      @update:modelValue="toggleAllItems"
    />
    <ListItem
      v-for="item in data"
      :key="item.id"
      :item="item"
      :headers="headers"
      :isCheckbox="isCheckbox"
      :isSelected="selectedItems[item.id]"
      :colors="columnColors"
      @toggleItem="toggleItem(item.id)"
    >
      <template v-for="header in headers" #[header.key]="{ item }">
        <slot :name="header.key" :item="item">
          {{ item[header.key] }}
        </slot>
      </template>
    </ListItem>
  </div>
</template>

<script>
import { reactive } from "vue";
import ListHeader from "./header/ListHeader.vue";
import ListItem from "./item/ListItem.vue";

export default {
  name: "List",
  components: {
    ListHeader,
    ListItem,
  },
  /**
   * List 組件
   * @author dio-chu
   * @component
   * @implement ICheckbox
   * @description 一個可重用的列表組件，支持自定義列頭、複選框功能和自定義列樣式。
   * 它結合了 ListHeader 和 ListItem 組件來創建一個完整的列表界面。
   * @example
   * <List
   *   :headers="[ { title: '編輯', key: 'edit' },...]"
   *   :data="[ { id: 1, company: 'ABC Corp', position: '工程師' },]"
   *   :isCheckbox="true" or isCheckbox
   *   :columnColors="{ position: { '工程師': 'blue-text', '設計師': 'green-text' } }" //特殊項目的顏色
   *   @selectionChange="handleSelectionChange" >
   *   <template #edit="{ item }">
   *     <button @click="editItem(item)">編輯</button>
   *   </template>
   * </List>
   */
  props: {
    /**
     * 定義列表的列頭
     * @author dio-chu
     * @type {Array<{title: string, key: string}>}
     * @required
     */
    headers: {
      type: Array,
      required: true,
    },
    /**
     * 列表的數據
     * @author dio-chu
     * @type {Array<Object>}
     * @required
     */
    data: {
      type: Array,
      required: true,
    },
    isCheckbox: {
      type: Boolean,
      default: false,
    },
    /**
     * 定義列的顏色樣式
     * @author dio-chu
     * @type {Object.<string, Object.<string, string>>}
     * @default {}
     */
    columnColors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      /**
       * 存儲選中項目的狀態
       * @author dio-chu
       * @type {Object.<string|number, boolean>}
       */
      selectedItems: reactive({}),
    };
  },
  computed: {
    /**
     * 檢查是否所有項目都被選中
     * @author dio-chu
     * @function
     * @returns {boolean}
     */
    isAllSelected() {
      return (
        this.data.length > 0 &&
        Object.keys(this.selectedItems).length === this.data.length &&
        Object.values(this.selectedItems).every((value) => value === true)
      );
    },
  },
  methods: {
    /**
     * 切換所有項目的選中狀態
     * @author dio-chu
     * @function
     * @emits check
     */
    toggleAllItems() {
      const newValue = !this.isAllSelected;
      this.data.forEach((item) => {
        this.selectedItems[item.id] = newValue;
      });
      this.$emit("check", this.selectedItems);
    },
    /**
     * 切換單個項目的選中狀態
     * @author dio-chu
     * @function
     * @param {number|string} itemId
     * @emits check
     */
    toggleItem(itemId) {
      this.selectedItems[itemId] = !this.selectedItems[itemId];
      this.$emit("check", this.selectedItems);
    },
  },

  created() {
    // 初始化所有項目的選中狀態為 false
    this.data.forEach((item) => {
      this.selectedItems[item.id] = false;
    });
  },
};
</script>
<style scoped>
.list-container {
  padding: 2rem 1rem;

  position: relative;
  overflow: hidden;
}

.list-container::before,
.list-container::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}

.list-container::before {
  top: 2rem;
  margin: 0rem 1rem;
}

.list-container::after {
  bottom: 2rem;
  margin: 0rem 1rem;
}

:deep(.list-header),
:deep(.list-item) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0rem;
}

:deep(.list-item:last-child) {
  border-bottom: none;
}
</style>
