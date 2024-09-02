<template>
  <div class="text-field-container" :style="{ width: width + 'px' }">
    <div class="text-field-wrapper">
      <div v-if="prependInnerIcon">
        <Icon :icon="prependInnerIcon" />
      </div>
      <input
        type="text"
        class="text-field-input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :readonly="readonly"
        @blur="handleBlur"
      />
      <div v-if="appendInnerIcon">
        <Icon :icon="appendInnerIcon" />
      </div>
    </div>
    <div v-if="errorMessages" class="text-field-error">
      {{ errorMessages }}
    </div>
  </div>
</template>

<script>
import VueInheritance from "vue-inheritance";
import { ITextFiled } from "./ITextFiled";
import Icon from "../icon/Icon.vue";
export default {
  name: "TextField",
  extends: VueInheritance.implement(ITextFiled),
  components: {
    Icon,
  },
  /**
   * IconButton 组件
   * @component
   * @author dio-chu
   * @description
   * @implement ITextFiled
   * @example
   * <TextField :width="400" :prependInnerIcon="pencilIcon" />
   * <TextField v-model="textValue" placeholder="請輸入文字" :errorMessages="errorMessages" :onBlur="handleBlur" />
   */
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * onBlur 失焦後執行函數
     * @type {Function}
     * @default null
     */
    onBlur: {
      type: Function,
      default: null,
    },
    prependInnerIcon: {
      type: String,
      default: "",
    },
    appendInnerIcon: {
      type: String,
      default: "",
    },
    errorMessages: {
      type: String,
    },
  },

  methods: {
    handleBlur(event) {
      if (this.onBlur) {
        this.onBlur(event);
      }
    },
  },
};
</script>

<style scoped>
.text-field-wrapper {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
}

.text-field-input {
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
}

.text-field-input::placeholder {
  color: #bdbdbd;
}

.text-field-error {
  color: rgb(213, 51, 51);
  font-size: 12px;
  margin: 0 0 4px 6px;
}
</style>
