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
     * isVisible
     * @author dio-chu
     * @description v-model:isVisible 控制modal組件是否出現
     */
    isVisible: {
      type: Boolean,
      default: false,
    },
    minWidth: {
      type: Number,
      default: 100,
    },
    minHeight: {
      type: Number,
      default: 50,
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
