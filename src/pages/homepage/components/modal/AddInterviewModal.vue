<template>
  <CommonModal
    :isVisible="isVisible"
    @close-modal="closeModal"
    title="新增面試"
    :width="400"
  >
    <div class="form">
      <div class="form__group">
        <label class="form__label">公司名稱</label>
        <input
          v-model="formData.company"
          class="form__input"
          placeholder="請輸入公司名稱"
        />
      </div>
      <span v-if="errors.company" class="form__error-message">
        {{ errors.company }}
      </span>
      <div class="form__group">
        <label class="form__label" for="position">面試職位</label>
        <select v-model="formData.position" class="form__input">
          <option disabled value="">請選擇面試職位</option>
          <option
            v-for="position in positions"
            :key="position.value"
            :value="position.value"
          >
            {{ position.label }}
          </option>
        </select>
      </div>
      <span v-if="errors.position" class="form__error-message">
        {{ errors.position }}
      </span>
      <div class="form__group">
        <label class="form__label" for="interviewDate">面試日期</label>
        <input
          v-model="formData.interviewDate"
          type="date"
          class="form__input"
        />
      </div>
      <span v-if="errors.interviewDate" class="form__error-message">
        {{ errors.interviewDate }}
      </span>
      <CommonButton label="儲存" @click="submitForm" />
    </div>
  </CommonModal>
</template>

<script>
import { mapState } from "vuex";
import CommonButton from "../../../../components/button/CommonButton.vue";
import CommonModal from "../../../../components/modal/CommonModal.vue";
import { POSITIONS } from "../../constant";

export default {
  name: "AddInterviewModal",
  components: {
    CommonButton,
    CommonModal,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        company: "",
        position: "",
        interviewDate: "",
      },
      positions: POSITIONS,
    };
  },
  computed: {
    ...mapState(["errors"]),
  },
  watch: {
    isVisible(newValue) {
      if (newValue) {
        this.resetForm();
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    submitForm() {
      this.$emit("submit-form", this.formData);
    },
    resetForm() {
      this.formData = {
        company: "",
        position: "",
        interviewDate: "",
      };
      this.$store.commit("clearErrors");
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__group {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem;
}

.form__label {
  color: #00797b;
  font-weight: bold;
  margin: 0rem 1.5rem;
  text-align: left;
  min-width: 15%;
}

.form__input,
.form__select {
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  margin: 0rem 1.5rem;
  padding: 8px;
  flex: 1;
  transition: box-shadow 0.2s ease-in-out;
}

.form__input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #298c91;
}

.form__error-message {
  color: rgb(229, 68, 68);
  font-size: 0.5em;
  margin-top: -3%;
  margin-bottom: 0.5rem;
}
</style>
