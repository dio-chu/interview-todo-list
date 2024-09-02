<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="onChange"
      :disabled="disabled"
      class="checkbox-input"
    />
    <span
      class="checkbox-custom"
      :class="{
        'checkbox-custom--checked': isChecked,
        'checkbox-custom--disabled': disabled && isChecked,
      }"
      :style="{
        borderColor: disabled ? '#858585' : checkedColor,
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
      this.$emit("update:isChecked", event.target.checked);
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
  margin: 0px 3px;
}

.checkbox-input {
  position: absolute;
  pointer-events: none;
  opacity: 0;
}
/* 自訂checkbox視覺 */
.checkbox-custom {
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 3px;
  transition: all 0.15s ease;
}
.checkbox-custom--disabled.checkbox-custom--checked {
  background-color: #858585;
}

.checkbox-custom--checked {
  background-color: var(--color, #00797b);
}
/* 勾勾 */
.checkbox-input:checked ~ .checkbox-custom::after {
  content: "";
  position: absolute; /* position: absolute; 時，預設會將 display 設定為 block */
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
