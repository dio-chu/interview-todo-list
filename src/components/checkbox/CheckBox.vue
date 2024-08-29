<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="onChange"
      class="checkbox-input"
    />
    <span
      class="checkbox-custom"
      :class="{ ischecked: modelValue }"
      :style="{
        borderColor: color,
      }"
    ></span>
  </label>
</template>

<script>
import VueInheritance from "vue-inheritance";
import { ICheckbox } from "./ICheckbox";

export default {
  name: "Checkbox",
  extends: VueInheritance.implement(ICheckbox),

  methods: {
    /**
     * 勾選狀態改變
     * @author dio-chu
     * @type {boolean}
     * @required
     * @description 用於控制複選框是否被勾選。true 表示勾選，false 表示未勾選。
     */
    onChange(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 3px;
  transition: all 0.15s ease;
}

.checkbox-custom.ischecked {
  background-color: var(--color, #00797b);
}

.checkbox-input:checked ~ .checkbox-custom::after {
  content: "";
  position: absolute;
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
