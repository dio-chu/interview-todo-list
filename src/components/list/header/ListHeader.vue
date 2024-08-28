<template>
  <div class="list-header">
    <div v-if="isCheckbox">
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
   * @description 通用的按鈕組件
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
  display: flex;
  font-weight: bold;
  color: #00797b;
  align-items: center;
  justify-content: center;
}

.header-item {
  display: flex;
  padding: 1rem 5%;
}
</style>
