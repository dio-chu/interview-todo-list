<template>
  <div class="list-header">
    <div v-if="isCheckbox" class="checkbox-column">
      <Checkbox
        :modelValue="modelValue"
        @update:modelValue="updateModelValue"
        :color="color"
      />
    </div>
    <div v-for="header in headers" :key="header.key" class="header-item">
      {{ header.title }}
    </div>
  </div>
</template>

<script>
import VueInheritance from "vue-inheritance/src";
import Checkbox from "../../checkbox/CheckBox.vue";
import { ICheckbox } from "../../checkbox/ICheckbox";

export default {
  name: "ListHeader",
  extends: VueInheritance.implement(ICheckbox),
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
    isCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateModelValue(value) {
      this.$emit("update:modelValue", value);
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
  text-align: center; /* 如果要內容在水平方向居中 */
  overflow: hidden;
}
</style>
