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

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import CommonButton from "../../components/button/CommonButton.vue";
import CommonSelect from "../../components/select/CommonSelect.vue";
import TextField from "../../components/textfield/TextField.vue";
import ListContainer from "./containers/ListContainer.vue";
import magnify from "../../assets/magnify.svg";
import { SELECT_DATA } from "./constant";
import AddInterviewModal from "./components/modal/AddInterviewModal.vue";
import EditInterviewModal from "./components/modal/EditInterviewModal.vue";
import DeleteInterviewModal from "./components/modal/DeleteInterviewModal.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    CommonButton,
    CommonSelect,
    TextField,
    ListContainer,
    AddInterviewModal,
    EditInterviewModal,
    DeleteInterviewModal,
  },
  data() {
    return {
      magnify,
      selectData: SELECT_DATA,
    };
  },
  computed: {
    ...mapState("modal", ["showAddModal", "showDeleteModal", "showEditModal"]),
    ...mapState("interview", ["selectFilter", "searchText"]),
    ...mapGetters("interview", ["anyItemSelected"]),
    selectFilterModel: {
      get() {
        return this.selectFilter;
      },
      set(value) {
        this.setSelectFilter(value);
      },
    },
    searchTextModel: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.setSearchText(value);
      },
    },
  },

  methods: {
    ...mapActions("modal", [
      "toggleAddModal",
      "toggleDeleteModal",
      "toggleEditModal",
    ]),
    ...mapActions("interview", ["setSelectFilter", "setSearchText"]),
    handleFormSubmit(formData) {
      this.formData = formData;
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$store.commit("interview/clearErrors");
        this.$store.dispatch("interview/addInterview", this.formData);
        this.toggleAddModal(false);
      } else {
        this.processValidationErrors();
      }
    },
    handleUpdateForm(updatedData) {
      this.formData = updatedData;
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$store.commit("interview/clearErrors");
        this.$store.dispatch("interview/updateInterview", this.formData);
        this.toggleEditModal(false);
      } else {
        this.processValidationErrors();
      }
    },
    processValidationErrors() {
      const errors = {};
      if (this.v$.formData.company.$error) {
        errors.company = this.v$.formData.company.$errors[0].$message;
      }
      if (this.v$.formData.position.$error) {
        errors.position = this.v$.formData.position.$errors[0].$message;
      }
      if (this.v$.formData.interviewDate.$error) {
        errors.interviewDate =
          this.v$.formData.interviewDate.$errors[0].$message;
      }
      this.$store.commit("interview/setErrors", errors);
    },
    handleConfirmDelete() {
      this.$store.dispatch("interview/deleteSelectedItems");
    },
  },
  validations() {
    return {
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
  },
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
