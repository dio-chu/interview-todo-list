<template>
  <transition name="modal">
    <div
      v-if="isVisible"
      class="modal-overlay"
      :class="{ 'backdrop-click': isBackdropClick }"
      @click="handleOverlayClick"
      :style="{
        '--overlay-opacity': overlayOpacity,
        '--min-width': `${minWidth}px`,
        '--min-height': `${minHeight}px`,
        '--width': width ? `${width}px` : 'auto',
        '--height': height ? `${height}px` : 'auto',
      }"
    >
      <div class="modal-container">
        <IconButton
          class="modal-close"
          :icon="closeCircleIcon"
          @click="closeModal"
          size="md"
        />

        <div class="modal-header">
          <p class="modal-title">{{ title }}</p>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueInheritance from "vue-inheritance";
import IconButton from "../button/IconButton.vue";
import { IModel } from "./IModal";
import closeCircleIcon from "../../assets/close-circle.svg";

export default {
  name: "CommonModal",
  components: { IconButton },
  extends: VueInheritance.implement(IModel),
  data() {
    return {
      closeCircleIcon,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    /**
     * overlayOpacity
     * @author dio-chu
     * @description 背景濾鏡的透明度
     */
    overlayOpacity: {
      type: Number,
      default: 0.4,
    },
  },
  methods: {
    handleOverlayClick(event) {
      if (event.target === event.currentTarget && this.isBackdropClick) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("update:isVisible", false);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, var(--overlay-opacity));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-width: var(--min-width);
  min-height: var(--min-height);
  width: var(--width, auto);
  height: var(--height, auto);
}

.modal-title {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: #00797b;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-close {
  background: none;
  border: none;
  margin: 0.5rem;
  margin-left: auto;
  cursor: pointer;
}

.modal-content {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  overflow-y: auto;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.15s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
