<template>
  <Checkbox v-model="checkbox" />
</template>

<script>
import Checkbox from "../../components/checkbox/CheckBox.vue";

export default {
  components: { Checkbox },
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>
