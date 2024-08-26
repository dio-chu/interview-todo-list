import { ComponentSize } from "../ComponentSize";
/**
 * IButton
 * @author dio-chu
 * @public
 * @interface
 * @description
 */

export const IButton = {
  props: {
    size: {
      type: String,
      default: ComponentSize.MD,
    },
  },
};
