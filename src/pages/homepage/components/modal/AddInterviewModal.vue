<template>
  <div class="form">
    <div class="form__group">
      <label class="form__label">公司名稱</label>
      <input
        v-model="formData.companyName"
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
      <label class="form__label" for="interviewDate">面試日期</label>
      <input v-model="formData.interviewDate" type="date" class="form__input" />
    </div>
    <span class="form__error-message">
      {{ errors.message }}
    </span>

    <CommonButton label="儲存" @click="saveFormData" />
  </div>
</template>

<script>
import CommonButton from "../../../../components/button/CommonButton.vue";
import { POSITIONS } from "../../constant";

export default {
  components: { CommonButton },
  data() {
    return {
      positions: POSITIONS,
      errors: {},
    };
  },
  computed: {
    ...mapState("interview", ["formData", "positions"]),
  },
  methods: {
    ...mapActions("interview", ["saveFormData"]),
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
}
</style>
