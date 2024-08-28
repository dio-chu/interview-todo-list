<!-- ListItem.vue -->
<template>
  <div class="list-item">
    <div v-if="isCheckbox" class="checkbox-column">
      <Checkbox
        :modelValue="isSelected"
        @update:modelValue="$emit('toggleItem', item.id)"
      />
    </div>
    <div
      v-for="header in headers"
      :key="header.key"
      class="item-data"
      :style="getColumnStyle(header.key, item[header.key])"
    >
      <slot :name="header.key" :item="item">
        {{ item[header.key] }}
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Checkbox from "../../checkbox/CheckBox.vue";

export default defineComponent({
  name: "ListItem",
  components: {
    Checkbox,
  },
  /**
   * ListItem 組件
   * @author dio-chu
   * @component
   * @implement ICheckbox
   * @description List 的單一列表組件，呈現時用v-for="item in listData"，在List中結合
   * @example
   * <ListItem v-for="item in listData" :key="item.id" :item="item" :headers="headers" isCheckbox :isSelected="selectedItems[item.id]" :colors="columnColors" @toggleItem="toggleItem(item.id)" >
   */
  props: {
    item: {
      type: Object,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    /**
     * 是否顯示複選框
     * @author dio-chu
     * @type {Boolean}
     * @default false
     */
    isCheckbox: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否被選中
     * @author dio-chu
     * @type {Boolean}
     * @required
     */
    isSelected: {
      type: Boolean,
      required: true,
    },
    colors: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["toggleItem"],
  methods: {
    /**
     * 獲取列的樣式
     * @author dio-chu
     * @function
     * @param {string} key - 列的鍵名
     * @param {string} value - 列的值
     * @returns {Object} 包含顏色的樣式對象
     */
    getColumnStyle(key, value) {
      if (this.colors[key] && this.colors[key][value]) {
        return { color: this.colors[key][value] };
      }
      return {};
    },
  },
});
</script>

<style scoped>
.list-item {
  display: table;
  width: 100%;
  table-layout: fixed; /* 確保表格布局不因內容變化而改變 */
  color: #00797b;
}

.checkbox-column,
.item-data {
  display: table-cell;
  padding: 1rem;
  text-align: center; /* 如果要內容在水平方向居中 */
  overflow: hidden;
}
</style>
