<template>
  <div>
    <CommonButton label="儲存" @click="dialog = true" />
    <CommonModal
      v-model="dialog"
      title="Test Modal"
      :width="500"
      :overlayOpacity="0.4"
    >
      <p>This is the content inside the modal.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum,
        perspiciatis repellendus officia possimus quae, eum harum accusantium
        architecto enim aspernatur nesciunt, quidem maxime. Odit aperiam
        repellendus quos excepturi rem?
      </p>
    </CommonModal>
  </div>
</template>

<script>
import CommonModal from "../../components/modal/CommonModal.vue";
import CommonButton from "../../components/button/CommonButton.vue";

export default {
  components: {
    CommonModal,
    CommonButton,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
