<template>
  <CommonSelect :options="selectData" v-model="selected" />
  <CommonSelect :options="filterGroup" v-model="selected2" />
</template>

<script>
import CommonSelect from "../common/select/CommonSelect.vue";

export default {
  components: {
    CommonSelect,
  },
  data() {
    return {
      selectData: ["全部", "已安排面試", "已有結果"],
      filterGroup: ["無", "無聲卡", "未錄取", "已錄取"],
      selected: "全部",
      selected2: "無",
    };
  },

  watch: {
    selected(newVal) {
      console.log("Selected value changed:", newVal);
    },
    selected2(newVal) {
      console.log("Selected2 value changed:", newVal);
    },
  },
};
</script>

