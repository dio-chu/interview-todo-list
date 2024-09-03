<template>
  <div class="form">
    <div class="form__group">
      <label class="form__label">公司名稱</label>
      <input
        :class="{ 'form__input--error': errors.companyName }"
        class="form__input"
        placeholder="請輸入公司名稱"
      />
    </div>

    <div class="form__group">
      <label class="form__label" for="position">面試職位</label>
      <select class="form__input">
        <option value="前端工程師">前端工程師</option>
        <option value="UIUX設計師">UIUX設計師</option>
        <option value="全端設計師">全端設計師</option>
      </select>
    </div>

    <div class="form__group">
      <label class="form__label" for="status">狀態</label>
      <CommonSelect :options="statusGroup" class="form__select" />
    </div>

    <div class="form__group">
      <label class="form__label" for="interviewDate">面試日期</label>
      <input type="date" class="form__input" />
    </div>

    <span class="form__error-message">
      {{ errors.position }}
    </span>

    <CommonButton label="儲存" />
  </div>
</template>

<script>
import CommonModal from "../../../components/modal/CommonModal.vue";
import CommonButton from "../../../components/button/CommonButton.vue";
import CommonSelect from "../../../components/select/CommonSelect.vue";
import { statusGroup } from "../../../data";

export default {
  components: { CommonModal, CommonButton, CommonSelect },

  data() {
    return {
      formData: {
        companyName: "",
        position: "前端工程師",
        interviewDate: "",
      },
      selected: "none",
      statusGroup,
      errors: {},
    };
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
