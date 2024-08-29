/**
 * ICheckbox
 * @author dio-chu
 * @public
 * @interface
 * @description
 */
export const ICheckbox = {
  props: {
    /**
     * 勾選狀態
     * @author dio-chu
     * @type {boolean}
     * @required
     * @description 用於控制複選框是否被勾選。true 表示勾選，false 表示未勾選。
     */
    modelValue: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      default: "#00797B",
    },
  },
  /**
   * 更新事件
   * @event update:modelValue
   * @type {boolean}
   * @description 當複選框的狀態改變時觸發。新的勾選狀態作為參數傳遞。
   */
  emits: ["update:modelValue"],
};
