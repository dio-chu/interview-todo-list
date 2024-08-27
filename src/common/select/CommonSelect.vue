<template>
  <div class="common-select">
    <button
      v-for="option in options"
      :key="option.id"
      :class="['select-option', { selected: option.value === modelValue }]"
      @click="updateValue(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CommonSelect",
  /**
   * CommonSelect
   * @author dio-chu
   * @component
   * @description
   * @example
   *  <CommonSelect :options="selectData" v-model="selected" />
   */
  props: {
    /**
     * @author dio-chu
     * @type {Array<{id: string, value: string, label: string}>}
     * @example [
     *   { id: "1", value: "all", label: "全部" },
     *   { id: "2", value: "interviewed", label: "已安排面试" },
     *   { id: "3", value: "resulted", label: "已有结果" }
     * ]
     */
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
.common-select {
  display: inline-flex;
  border-radius: 5px;
}
.select-option {
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s;
  color: #4e4e4e;
  background-color: rgba(255, 255, 255, 0);
}
.select-option:not(:last-child) {
  position: relative;
}
.select-option:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 24%;
  height: 50%;
  width: 1.5px;
  background-color: #4e4e4e;
}
.select-option.selected {
  color: #00797b;
}
.select-option:hover {
  color: #0c8789;
}
</style>
