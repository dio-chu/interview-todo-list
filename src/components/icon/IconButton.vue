<template>
  <div
    :class="[
      'icon-button',
      `icon-button-${size}`,
      { clickable: !disabled && isClickable, disabled },
    ]"
    @click="handleClick"
  >
    <Icon :icon="icon" :size="size" />
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import { IIcon } from "./IIcon";

export default {
  name: "IconButton",
  components: {
    Icon,
  },
  /**
   * IconButton 组件
   * @component
   * @author dio-chu
   * @description
   * @example
   * <IconButton :icon="pencilIcon" size="lg" isClickable :disabled="false" @click="handleIconClick" />
   */
  props: {
    ...IIcon.props,
    isClickable: {
      type: Boolean,
      default: true,
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
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
}

.clickable {
  cursor: pointer;
  transition: opacity 0.3s, background-color 0.2s ease-out;
}

.clickable:not(.disabled):hover {
  opacity: 0.8;
  background-color: rgba(177, 177, 177, 0.513);
}

.clickable:not(.disabled):active {
  opacity: 0.6;
}

.disabled {
  opacity: 0.5;
  filter: grayscale(100%);
}
</style>
