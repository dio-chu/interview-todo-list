/**
 * IModel
 * @author dio-chu
 * @public
 * @interface IModel
 * @description
 */

export const IModel = {
  props: {
    /**
     * modelValue
     * @author dio-chu
     * @description v-model 控制modal組件是否出現
     */
    modelValue: {
      type: Boolean,
      default: false,
    },
    minWidth: {
      type: Number,
      default: 400,
    },
    minHeight: {
      type: Number,
      default: 300,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    isBackdropClick: {
      type: Boolean,
      default: true,
    },
  },
};
