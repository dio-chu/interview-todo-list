<template>
  <AddInterviewModal
    :isVisible="showAddModal"
    @close-modal="toggleAddModal(false)"
    @submit-form="handleFormSubmit"
  />
  <EditInterviewModal
    :isVisible="showEditModal"
    @close-modal="toggleEditModal(false)"
    @update-form="handleUpdateForm"
  />
  <DeleteInterviewModal
    :isVisible="showDeleteModal"
    @close-modal="toggleDeleteModal(false)"
    @confirm-delete="handleConfirmDelete"
  />
  <div class="interview-management">
    <div class="interview-managementactions">
      <CommonButton label="新增面試" size="lg" @click="toggleAddModal(true)" />
    </div>
    <div class="interview-managementfilters">
      <CommonSelect :options="selectData" v-model="selectFilterModel" />
      <TextField
        v-model="searchTextModel"
        placeholder="請輸入欲搜尋內容"
        :width="300"
        :prependInnerIcon="magnify"
      />
    </div>
    <div class="interview-managementlist-container">
      <ListContainer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import CommonButton from "../../components/button/CommonButton.vue";
import CommonSelect from "../../components/select/CommonSelect.vue";
import TextField from "../../components/textfield/TextField.vue";
import ListContainer from "./containers/ListContainer.vue";
import magnify from "../../assets/magnify.svg";
import { SELECT_DATA } from "./constant";
import AddInterviewModal from "./components/modal/AddInterviewModal.vue";
import EditInterviewModal from "./components/modal/EditInterviewModal.vue";
import DeleteInterviewModal from "./components/modal/DeleteInterviewModal.vue";

const store = useStore();

const selectData = ref(SELECT_DATA);
const formData = ref({});

const showAddModal = computed(() => store.state.showAddModal);
const showDeleteModal = computed(() => store.state.showDeleteModal);
const showEditModal = computed(() => store.state.showEditModal);

const selectFilterModel = computed({
  get: () => store.state.selectFilter,
  set: (value) => {
    store.dispatch("clearAllSelections");
    store.dispatch("setSelectFilter", value);
  },
});

const searchTextModel = computed({
  get: () => store.state.searchText,
  set: (value) => store.dispatch("setSearchText", value),
});

const rules = {
  formData: {
    company: {
      required: helpers.withMessage("公司名稱不能為空", required),
      trimWhitespace: helpers.withMessage(
        "公司名稱不能包含前後空白",
        (value) => value.trim() === value
      ),
    },
    position: {
      required: helpers.withMessage("面試職位不能為空", required),
    },
    interviewDate: {
      required: helpers.withMessage("面試日期不能為空", required),
    },
  },
};

const v$ = useVuelidate(rules, { formData });

const toggleAddModal = (value) => store.dispatch("toggleAddModal", value);
const toggleDeleteModal = (value) => store.dispatch("toggleDeleteModal", value);
const toggleEditModal = (value) => store.dispatch("toggleEditModal", value);

const handleFormSubmit = async (data) => {
  formData.value = data;
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    console.log("表單驗證通過");
    store.commit("clearErrors");
    store.dispatch("addInterview", formData.value);
    toggleAddModal(false);
  } else {
    console.log("表單驗證失敗");
    processValidationErrors();
  }
};

const handleUpdateForm = async (updatedData) => {
  formData.value = updatedData;
  v$.value.$reset();
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    store.commit("clearErrors");
    store.dispatch("updateInterview", formData.value);
    v$.value.$reset();
    toggleEditModal(false);
  } else {
    processValidationErrors();
  }
};

const processValidationErrors = () => {
  const errors = {};
  if (v$.value.formData.company.$error) {
    errors.company = v$.value.formData.company.$errors[0].$message;
  }
  if (v$.value.formData.position.$error) {
    errors.position = v$.value.formData.position.$errors[0].$message;
  }
  if (v$.value.formData.interviewDate.$error) {
    errors.interviewDate = v$.value.formData.interviewDate.$errors[0].$message;
  }
  store.commit("setErrors", errors);
};

const handleConfirmDelete = () => {
  store.dispatch("deleteSelectedItems");
};
</script>

<style scoped>
.interview-management {
  padding: 20px;
}
.interview-managementactions {
  margin-bottom: 1rem;
}
.interview-managementfilters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.interview-managementlist-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
