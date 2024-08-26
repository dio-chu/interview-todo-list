<template>
  <button
    :class="['common-button', sizeClass, { disabled: disable }]"
    :disabled="disable"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { ButtonSize } from "../ConponentSize";

export default {
  name: "CommonButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: ButtonSize.MD,
      validator(value) {
        return Object.values(ButtonSize).includes(value);
      },
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
  methods: {
    handleClick(event) {
      if (!this.disable) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style scoped>
.common-button {
  padding: 10px 18px;

  border-radius: 6px;
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
  font-size: 16px;
}

/* 禁用狀態 */
.disabled {
  background-color: #939393;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
