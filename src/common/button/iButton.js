import { ConponentSize } from "../ConponentSize";
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
      default: ConponentSize.MD,
    },
  },
};
