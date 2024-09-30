<template>
  <CommonButton
    class="list-container__delete-button"
    label="刪除"
    size="sm"
    :disabled="!anyItemSelected"
    @click="toggleDeleteModal(true)"
  />
  <List
    :headers="headers"
    :data="processedData"
    :needShowCheckbox="true"
    :columnColors="columnColors"
    :isAllSelected="isAllSelected"
    @toggle-item="onToggleItem"
    @toggle-all="onToggleAll"
  >
    <template v-slot:edit="{ item }">
      <IconButton
        :disabled="false"
        :icon="pencilIcon"
        isClickable
        @click="openEditModal(item)"
      />
    </template>

    <template v-slot:status="{ item }">
      <span :style="{ color: columnColors.status[item.status] }">
        {{ item.status }}
      </span>
    </template>
  </List>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CommonButton from "../../../components/button/CommonButton.vue";
import List from "../../../components/list/List.vue";
import IconButton from "../../../components/button/IconButton.vue";
import pencilIcon from "../../../assets/pencil.svg";

export default {
  name: "ListContainer",
  components: {
    CommonButton,
    List,
    IconButton,
  },
  data() {
    return {
      pencilIcon,
    };
  },
  computed: {
    ...mapState(["headers", "columnColors", "data"]),
    ...mapGetters(["anyItemSelected", "isAllSelected", "processedData"]),
  },
  methods: {
    ...mapActions([
      "toggleDeleteModal",
      "toggleEditModal",
      "toggleItemSelection",
      "toggleAllSelection",
      "setEditItem",
    ]),

    onToggleItem(itemId) {
      this.toggleItemSelection(itemId);
    },
    onToggleAll(isSelected) {
      this.toggleAllSelection(isSelected);
    },
    openEditModal(item) {
      this.setEditItem(item); // 編輯的項目
      console.log(item);
      this.toggleEditModal(true);
    },
  },
};
</script>

<style>
.list-container__delete-button {
  margin-left: 2%;
  margin-bottom: -10px;
}
</style>
