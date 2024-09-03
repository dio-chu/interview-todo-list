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
    :data="data"
    needShowCheckbox
    :columnColors="columnColors"
    :isAllSelected="isAllSelected"
    @toggle-item="toggleItemSelection"
    @toggle-all="toggleAllSelection"
  >
    <template v-slot:edit="{ item }">
      <IconButton
        :disabled="false"
        :icon="pencilIcon"
        isClickable
        @click="toggleEditModal(item)"
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
    ...mapState("interview", ["headers", "columnColors", "data"]),
    ...mapGetters("interview", ["anyItemSelected", "isAllSelected"]),
  },
  methods: {
    ...mapActions("interview", [
      "toggleItemSelection",
      "toggleAllSelection",
      "toggleDeleteModal",
      "toggleEditModal",
    ]),
  },
};
</script>

<style>
.list-container__delete-button {
  margin-left: 2%;
  margin-bottom: -10px;
}
</style>
