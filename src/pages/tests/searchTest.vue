<template>
  <div>
    <TextField
      v-model="textValue"
      placeholder="請輸入文字"
      :width="300"
      :errorMessages="errorMessages"
      @blur="handleBlur"
      :appendInnerIcon="closeCircleIcon"
    />
    <TextField :width="400" :prependInnerIcon="pencilIcon" />
    <p>當前輸入: {{ textValue }}</p>
  </div>
</template>

<script>
import TextField from "../../components/textfield/TextField.vue";
import pencilIcon from "../../assets/pencil.svg";
import closeCircleIcon from "../../assets/close-circle.svg";

export default {
  components: {
    TextField,
  },
  data() {
    return {
      textValue: "",
      errorMessages: "",
      pencilIcon,
      closeCircleIcon,
    };
  },
  methods: {
    handleBlur() {
      console.log(this.textValue);
      if (!this.textValue) {
        this.errorMessages = "輸入框不能為空";
      } else {
        this.errorMessages = "";
      }
    },
  },
};
</script>
