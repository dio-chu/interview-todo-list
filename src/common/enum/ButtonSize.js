import { defineEnum } from "../definition";

/**
 * ButtonSize
 * @author dio-chu
 * @public
 * @enum
 * @description Mode Size.  LG | MD | SM
 * sm: 14,  //font-size 16px, 18px, 22px
 * md: 18,
 * lg: 22
 */

export const ButtonSize = defineEnum({
  LG: "lg",
  MD: "md",
  SM: "sm",
});
