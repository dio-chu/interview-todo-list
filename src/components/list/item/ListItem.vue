<template>
  <div class="list-item">
    <div v-if="needShowCheckbox" class="checkbox-column">
      <Checkbox
        :isChecked="isSelected"
        @update:isChecked="$emit('toggleItem', item.id)"
      />
    </div>
    <div v-for="column in columns" :key="column.key" class="item-data">
      <slot :name="column.key" :item="item">
        {{ item[column.key] }}
      </slot>
    </div>
  </div>
</template>

<script>
import Checkbox from "../../checkbox/CheckBox.vue";

export default {
  name: "ListItem",
  components: {
    Checkbox,
  },
  /**
   * ListItem 組件
   * @author dio-chu
   * @description List 的單一列表組件，呈現時用 v-for="item in listData"，在父組件中結合
   * @example
   * <ListItem
   *   v-for="item in listData"
   *   :key="item.id"
   *   :item="item"
   *   :columns="columns"
   *   needShowCheckbox
   *   :isSelected="selectedItems[item.id]"
   *   @toggleItem="toggleItem(item.id)"
   * >
   *   <template #edit="{ item }">
   *     <button @click="editItem(item)">編輯</button>
   *   </template>
   * </ListItem>
   */
  props: {
    item: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    /**
     * 是否顯示複選框
     * @author dio-chu
     * @type {Boolean}
     * @default false
     */
    needShowCheckbox: {
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
      default: false,
    },
  },
  emits: ["toggleItem"],
};
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
