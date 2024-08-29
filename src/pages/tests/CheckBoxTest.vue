<template>
  <Checkbox v-model="ischeckbox" />
</template>

<script>
import Checkbox from "../../components/checkbox/CheckBox.vue";

export default {
  components: { Checkbox },
  data() {
    return {
      ischeckbox: false,
    };
  },
};
</script>
