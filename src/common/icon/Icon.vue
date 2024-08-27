<!-- Icon.vue -->
<template>
  <div
    :class="[
      'icon',
      `icon-${size}`,
      { clickable: !disabled && isClickable, disabled },
    ]"
    @click="handleClick"
  >
    <img :src="icon" :alt="icon" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  /**
   * Icon 组件
   * @component
   * @description 通用的icon，支持禁用狀態和精確的點擊控制
   * @example
   * <Icon :icon="pencilIcon" size="lg" isClickable disabled @click="handleIconClick" />
   */
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["lg", "md", "sm"].includes(value),
    },
    isClickable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  methods: {
    handleClick(event) {
      if (this.disabled || !this.isClickable) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
.icon svg {
  fill: var(--icon-color, currentColor);
}

.icon-lg {
  width: 24px;
  height: 24px;
}
.icon-md {
  width: 18px;
  height: 18px;
}
.icon-sm {
  width: 14px;
  height: 14px;
}

.icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.clickable {
  cursor: pointer;
  transition: opacity 0.3s;
}

.clickable:not(.disabled):hover {
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(177, 177, 177, 0.513);
  transition: background-color 0.2s ease-out;
}

.clickable:not(.disabled):active {
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
}

.disabled {
  opacity: 0.5;
  filter: grayscale(100%);
}
</style>
