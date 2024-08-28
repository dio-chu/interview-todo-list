import { defineEnum } from "../definition";

/**
 * IconSize
 * @author dio-chu
 * @public
 * @enum
 * @description Mode Size.  LG | MD | SM
 * sm: 14,  //font-size 16px, 18px, 24px
 * md: 18,
 * lg: 24
 */

export const IconSize = defineEnum({
  LG: "lg",
  MD: "md",
  SM: "sm",
});
