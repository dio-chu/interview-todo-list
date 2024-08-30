<template>
  <div>
    <!-- Checkbox 組件 -->
    <Checkbox v-model:isChecked="isCheckbox" :disabled="isDisabled" />

    <!-- 控制 Checkbox 的 disabled 狀態 -->
    <button @click="toggleDisabled">
      {{ isDisabled ? "Enable Checkbox" : "Disable Checkbox" }}
    </button>
  </div>
</template>

<script>
import Checkbox from "../../components/checkbox/CheckBox.vue";

export default {
  components: { Checkbox },
  data() {
    return {
      isCheckbox: false, // 控制 checkbox 的勾選狀態
      isDisabled: false, // 控制 checkbox 的禁用狀態
    };
  },
  methods: {
    // 切換 disabled 狀態的方法
    toggleDisabled() {
      this.isDisabled = !this.isDisabled;
    },
  },
};
</script>
