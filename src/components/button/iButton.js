import { ButtonSize } from "../../common/enum/ButtonSize";
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
      default: ButtonSize.MD,
    },
  },
};
