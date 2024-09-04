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
      <span v-show="errors.company" class="form__error-message">
        {{ errors.company }}
      </span>
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
      <span v-show="errors.position" class="form__error-message">
        {{ errors.position }}
      </span>
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
      <span v-show="errors.interviewDate" class="form__error-message">
        {{ errors.interviewDate }}
      </span>

      <CommonButton label="儲存" @click="updateForm" />
    </div>
  </CommonModal>
</template>

<script>
import { mapState } from "vuex";
import CommonButton from "../../../../components/button/CommonButton.vue";
import CommonSelect from "../../../../components/select/CommonSelect.vue";
import CommonModal from "../../../../components/modal/CommonModal.vue";
import { POSITIONS, STATUS_GROUP } from "../../constant";
import {
  getPositionValueFromLabel,
  getStatusValueFromLabel,
} from "../..//utils/transform";
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
        id: null,
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
    ...mapState("interview", ["errors", "editItem"]),
  },
  watch: {
    editItem: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          let statusLabel = newVal.status;
          // 如果狀態是 "等待面試" 或 "等待結果"，統一轉換為 "none"
          if (statusLabel === "等待面試" || statusLabel === "等待結果") {
            statusLabel = "無";
          }
          this.formData = {
            id: newVal.id,
            company: newVal.company,
            position: getPositionValueFromLabel(
              newVal.position,
              this.positions
            ),
            status: getStatusValueFromLabel(statusLabel, this.statusGroup),
            interviewDate: newVal.interviewDate,
          };
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    updateForm() {
      this.$emit("update-form", this.formData);
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
