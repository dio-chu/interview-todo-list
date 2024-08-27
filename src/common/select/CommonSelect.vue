<template>
  <div class="common-select">
    <button
      v-for="option in options"
      :key="option"
      :class="['select-option', { selected: option === modelValue }]"
      @click="updateValue(option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CommonSelect",
  /**
   * CommonSelect 組件
   * @author dio-chu
   * @component
   * @description 通用的選項列
   * @example
   *  <CommonSelect :options="selectData" v-model="selected" />
   */
  props: {
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
    updateValue(option) {
      this.$emit("update:modelValue", option);
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
