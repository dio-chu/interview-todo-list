<template>
  <button
    :class="['common-button', sizeClass, { disabled: disable }]"
    :disable="disable"
  >
    {{ label }}
  </button>
</template>

<script>
import { IButton } from "../button/iButton";
/**
 * CommonButton 組件
 * @author dio-chu
 * @component
 * @extend IButton
 * @description 通用的按鈕組件
 * @example
 * <CommonButton label="Click Me" disable @click="handleClick" />
 */
export default {
  name: "CommonButton",
  mixins: [IButton],
  props: {
    label: {
      type: String,
      required: true,
    },
    disable: {
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
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.common-button:hover {
  background-color: #037171;
}

.common-button:active {
  background-color: #004f4f;
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
.disabled {
  background-color: #939393;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
