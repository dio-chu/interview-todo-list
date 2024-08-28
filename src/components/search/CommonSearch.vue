<template>
  <div class="search-container">
    <Icon :icon="icon" class="search-icon" />
    <input
      type="text"
      class="search-input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import Icon from "../icon/Icon.vue";

export default {
  name: "CommonSearch",
  /**
   * CommonSearch 组件
   * @component
   * @author dio-chu
   * @description 搜尋組件
   * @example   <CommonSearch v-model="searchQuery" placeholder="請輸入面試紀錄關鍵字" :icon="pencilIcon" @update:modelValue="handleSearch" />
   *
   */
  components: {
    Icon,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.search-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 14px;
}

.search-icon {
  position: absolute;
  left: 2%;
  color: #757575;
}

.search-input {
  border: none;
  outline: none;
  padding-left: 32px; /* icon空間 */
  width: 100%;
  font-size: 14px;
}

.search-input::placeholder {
  color: #bdbdbd;
}
</style>
