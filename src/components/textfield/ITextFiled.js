/**
 * ITextFiled
 * @author dio-chu
 * @public
 * @interface
 * @description input內容
 */

export const ITextFiled = {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
    },
  },
  emits: ["update:modelValue"],
};
