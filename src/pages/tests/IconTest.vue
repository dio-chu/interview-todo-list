<template>
  <div>
    <IconButton
      :icon="pencilIcon"
      size="lg"
      isClickable
      disabled
      @click="handleClick"
    />
    <IconButton :icon="pencilIcon" isClickable @click="handleClick" />
    <IconButton :icon="closeCircleIcon" size="md" />
  </div>
  <div>
    <Icon :icon="pencilIcon" size="lg" />
    <Icon :icon="pencilIcon" />
    <Icon :icon="closeCircleIcon" size="sm" />
  </div>
</template>

<script>
import Icon from "../../components/icon/Icon.vue";
import IconButton from "../../components/button/IconButton.vue";
import pencilIcon from "../../assets/pencil.svg";
import closeCircleIcon from "../../assets/close-circle.svg";

export default {
  name: "ExamplePage",
  components: {
    Icon,
    IconButton,
  },
  setup() {
    const handleClick = () => {
      console.log("Icon clicked!");
    };

    return {
      pencilIcon,
      closeCircleIcon,
      handleClick,
    };
  },
};
</script>
<style></style>
