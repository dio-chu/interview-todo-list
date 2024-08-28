<template>
  <button
    :class="['common-button', sizeClass, { disabled: disabled }]"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script>
import VueInheritance from "vue-inheritance";
import { IButton } from "./iButton";
/**
 * CommonButton 組件
 * @author dio-chu
 * @component
 * @extend IButton
 * @description 通用的按鈕組件
 * @example
 * <CommonButton label="Click Me" :disabled="isDisabled" @click="handleClick" />
 */
export default {
  name: "CommonButton",
  extends: VueInheritance.implement(IButton),
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizeClass() {
      return `button-size-${this.size}`;
    },
  },
};
</script>

<style scoped>
.common-button {
  padding: 10px 18px;
  user-select: none;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #00797b;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, opacity 0.3s;
}

.common-button:not(.disabled):hover {
  background-color: #037171;
  opacity: 0.8;
}

.common-button:not(.disabled):active {
  background-color: #004f4f;
  opacity: 0.6;
}

/* 尺寸 */
.button-size-lg {
  font-size: 22px;
}

.button-size-md {
  font-size: 18px;
}

.button-size-sm {
  font-size: 14px;
}

/* 禁用狀態 */
.common-button.disabled {
  background-color: #939393;
  cursor: none;
  opacity: 0.5;
}
</style>
