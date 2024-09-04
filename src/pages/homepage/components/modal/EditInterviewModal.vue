<template>
  <CommonModal
    :isVisible="isVisible"
    @close-modal="closeModal"
    title="編輯面試"
    :width="480"
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
      <div class="form__group">
        <label class="form__label" for="position">面試職位</label>
        <select v-model="formData.position" class="form__input">
          <option
            v-for="position in positions"
            :key="position.value"
            :value="position.value"
          >
            {{ position.label }}
          </option>
        </select>
      </div>
      <div class="form__group">
        <label class="form__label" for="status">狀態</label>
        <CommonSelect
          v-model="formData.status"
          :options="statusGroup"
          class="form__select"
        />
      </div>
      <div class="form__group">
        <label class="form__label" for="interviewDate">面試日期</label>
        <input
          v-model="formData.interviewDate"
          type="date"
          class="form__input"
        />
      </div>

      <CommonButton label="儲存" />
    </div>
  </CommonModal>
</template>

<script>
import { mapState } from "vuex";
import CommonButton from "../../../../components/button/CommonButton.vue";
import CommonSelect from "../../../../components/select/CommonSelect.vue";
import CommonModal from "../../../../components/modal/CommonModal.vue";
import { POSITIONS, STATUS_GROUP } from "../../constant";

export default {
  components: { CommonButton, CommonSelect, CommonModal },
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
        status: "",
        interviewDate: "",
      },
      statusGroup: STATUS_GROUP,
      positions: POSITIONS,
    };
  },
  computed: {
    ...mapState("interview", ["errors"]),
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
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
.form__input {
  margin: 0rem 1.5rem;
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  transition: box-shadow 0.2s ease-in-out;
}
.form__input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #298c91;
}
.form__select {
  margin: 0rem 0.5rem;
}

.form__input,
.form__select {
  padding: 8px;
  flex: 1;
}

.form__input--error {
  border: 1px solid rgb(229, 68, 68);
}

.form__error-message {
  color: rgb(229, 68, 68);
  font-size: 0.8em;
  margin-top: 4px;
}
</style>
