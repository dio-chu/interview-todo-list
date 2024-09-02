<template>
  <div class="list-header">
    <div v-if="needShowCheckbox" class="checkbox-column">
      <Checkbox :isChecked="isChecked" @update:isChecked="updateIsChecked" />
    </div>
    <div v-for="header in headers" :key="header.key" class="header-item">
      {{ header.title }}
    </div>
  </div>
</template>

<script>
import Checkbox from "../../checkbox/Checkbox.vue";
export default {
  name: "ListHeader",
  /**
   * ListHeader 組件
   * @author dio-chu
   * @component
   * @implement ICheckbox
   * @description List的列表頭
   * @example
   * <ListHeader  :headers="headers"  isCheckbox   v-model="isAllSelected" />
   */
  components: {
    Checkbox,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    needShowCheckbox: {
      type: Boolean,
      default: false,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:isChecked"],
  methods: {
    updateIsChecked(value) {
      this.$emit("update:isChecked", value);
    },
  },
};
</script>

<style scoped>
.list-header {
  display: table;
  width: 100%;
  table-layout: fixed; /* 確保表格布局不因內容變化而改變 */
  color: #00797b;
  font-weight: bold;
}

.checkbox-column,
.header-item {
  display: table-cell;
  padding: 1rem;
  text-align: center; /* 各欄位至中 */
}
</style>
