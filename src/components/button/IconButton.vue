<template>
  <button
    :class="[
      'icon-button',
      `icon-button-${size}`,
      { clickable: !disabled && isClickable, disabled },
    ]"
    @click="handleClick"
  >
    <Icon :icon="icon" :size="size" />
  </button>
</template>

<script>
import VueInheritance from "vue-inheritance";
import { IButton } from "./iButton";
import { IIcon } from "../icon/IIcon";
import Icon from "../icon/Icon.vue";

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
  extends: VueInheritance.implement(IButton).implement(IIcon),
  props: {
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
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: rgb(255, 255, 255);
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
