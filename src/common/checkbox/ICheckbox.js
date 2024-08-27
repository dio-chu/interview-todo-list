/**
 * ICheckbox
 * @author dio-chu
 * @public
 * @interface
 * @description
 */
export const ICheckbox = {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      default: "#00797B",
    },
  },
  emits: ["update:modelValue"],
};
