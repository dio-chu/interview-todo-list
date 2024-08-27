<template>
  <Search
    v-model="searchQuery"
    placeholder="請輸入面試紀錄關鍵字"
    :icon="pencilIcon"
    @update:modelValue="handleSearch"
  />
  <Search
    v-model="searchQuery"
    :icon="pencilIcon"
    @update:modelValue="handleSearch"
  />
</template>

<script>
import { ref } from "vue";
import Search from "../../components/search/CommonSearch.vue";
import pencilIcon from "../../assets/pencil.svg";

export default {
  components: {
    Search,
  },
  setup() {
    const searchQuery = ref("");

    const handleSearch = (value) => {
      console.log("input:", value);
    };

    return {
      pencilIcon,
      searchQuery,
      handleSearch,
    };
  },
};
</script>
