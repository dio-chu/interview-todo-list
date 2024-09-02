<template>
  <CommonModal
    v-model="dialogModel"
    title="新增面試"
    :width="500"
    :overlayOpacity="0.4"
  >
    <div>
      <label for="companyName">公司名稱</label>
      <input
        id="companyName"
        v-model="formData.companyName"
        :class="{ 'input-error': errors.companyName }"
        placeholder="請輸入公司名稱"
      />
      <span v-if="errors.companyName" class="error-message">{{
        errors.companyName
      }}</span>
    </div>

    <div>
      <label for="position">面試職位</label>
      <select id="position" v-model="formData.position">
        <option disabled value="">請選擇面試職位</option>
        <option value="前端工程師">前端工程師</option>
        <option value="UIUX設計師">UIUX設計師</option>
        <option value="全端設計師">全端設計師</option>
      </select>
      <span v-if="errors.position" class="error-message">{{
        errors.position
      }}</span>
    </div>

    <div>
      <label for="interviewDate">面試日期</label>
      <input id="interviewDate" v-model="formData.interviewDate" type="date" />
      <span v-if="errors.interviewDate" class="error-message">{{
        errors.interviewDate
      }}</span>
    </div>

    <CommonButton label="送出" @click="submitForm" />
  </CommonModal>
</template>

<script>
import { reactive, computed } from "vue";
import CommonModal from "../components/modal/CommonModal.vue";
import CommonButton from "../components/button/CommonButton.vue";

export default {
  components: { CommonModal, CommonButton },
  props: {
    dialog: Boolean,
  },
  emits: ["update:dialog", "form-submitted"],
  setup(props, { emit }) {
    const formData = reactive({
      companyName: "",
      position: "",
      interviewDate: "",
    });

    const errors = reactive({});

    const dialogModel = computed({
      get: () => props.dialog,
      set: (value) => emit("update:dialog", value),
    });

    const validateForm = () => {
      errors.companyName = !formData.companyName.trim()
        ? "公司名稱是必填項"
        : /[!@#$%^&*(),.?":{}|<>]/g.test(formData.companyName)
        ? "公司名稱不能包含特殊符號"
        : "";
      errors.position = !formData.position ? "請選擇面試職位" : "";
      errors.interviewDate = !formData.interviewDate ? "請選擇面試日期" : "";

      return Object.values(errors).every((error) => !error);
    };

    const submitForm = () => {
      if (validateForm()) {
        emit("form-submitted", { ...formData });
        dialogModel.value = false;
      }
    };

    return {
      formData,
      errors,
      dialogModel,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input-error {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
