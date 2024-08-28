<template>
  <CommonSelect :options="selectData" v-model="selected" />
  <CommonSelect :options="filterGroup" v-model="selected2" />
</template>

<script>
import CommonSelect from "../../components/select/CommonSelect.vue";

export default {
  components: {
    CommonSelect,
  },
  data() {
    return {
      selectData: [
        { id: "1", value: "all", label: "全部" },
        { id: "2", value: "interviewed", label: "已安排面試" },
        { id: "3", value: "resulted", label: "已有結果" },
      ],
      filterGroup: [
        { id: "1", value: "none", label: "無" },
        { id: "2", value: "no_soundcard", label: "無聲卡" },
        { id: "3", value: "not_hired", label: "未錄取" },
        { id: "4", value: "hired", label: "已錄取" },
      ],
      selected: "all",
      selected2: "none",
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
