<template>
  <div :class="['icon', `icon-${size}`]">
    <img :src="icon" :alt="icon" />
  </div>
</template>

<script>
import VueInheritance from "vue-inheritance";
import { IIcon } from "./IIcon";

export default {
  name: "Icon",
  /**
   * Icon 组件
   * @component
   * @author dio-chu
   * @description 基本的Icon組件
   * @example
   * <Icon :icon="pencilIcon" size="lg" />
   */
  extends: VueInheritance.implement(IIcon),
};
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
<<<<<<< HEAD
=======

>>>>>>> 2476c56 (chore:icon component delete line)
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
</style>
