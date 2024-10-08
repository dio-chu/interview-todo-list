import { IconSize } from "../../common/enum/IconSize";

/**
 * IIcon
 * @author dio-chu
 * @public
 * @interface
 * @description Icon 組件的基本接口，包含 icon 和 size 屬性
 */
export const IIcon = {
  props: {
    /**
     * icon
     * @author dio-chu
     * @public
     * @description icon圖片路徑 <Icon :icon="pencilIcon" />
     */
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: IconSize.MD,
    },
  },
};
