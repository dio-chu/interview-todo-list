<template>
  <div class="list-container">
    <div class="list-header-container">
      <slot name="header" v-bind="{ headers, needShowCheckbox, isAllSelected }">
        <ListHeader
          :headers="headers"
          :needShowCheckbox="needShowCheckbox"
          :isChecked="isAllSelected"
          @update:isChecked="$emit('toggle-all', $event)"
      /></slot>
    </div>
    <div class="list-items-container">
      <template v-for="item in data" :key="item.id">
        <slot
          name="item"
          v-bind="{ item, headers, needShowCheckbox, columnColors }"
        >
          <ListItem
            :item="item"
            :columns="headers"
            :needShowCheckbox="needShowCheckbox"
            :isSelected="item.isSelected"
            :colors="columnColors"
            @toggleItem="$emit('toggle-item', item.id)"
          >
            <template v-for="header in headers" v-slot:[header.key]="{ item }">
              <slot :name="header.key" :item="item">
                {{ item[header.key] }}
              </slot>
            </template>
          </ListItem>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
import ListHeader from "./header/ListHeader.vue";
import ListItem from "./item/ListItem.vue";
export default {
  name: "List",
  components: {
    ListHeader,
    ListItem,
  },
  /**
   * List 組件
   * @author dio-chu
   * @component
   * @implement ICheckbox
   * @description 一個可重用的列表組件，支持自定義列頭、複選框功能和自定義列樣式。
   * 它結合了 ListHeader 和 ListItem 組件來創建一個完整的列表界面。
   */
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    needShowCheckbox: {
      type: Boolean,
      default: false,
    },
    columnColors: {
      type: Object,
      default: () => ({}),
    },

    isAllSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.list-container {
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
}

.list-header-container {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
.list-items-container {
  overflow-y: auto;
  max-height: 500px;
}
.list-container::before,
.list-container::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}
.list-container::before {
  top: 2rem;
  margin: 0rem 1rem;
}
.list-container::after {
  bottom: 2rem;
  margin: 0rem 1rem;
}
:deep(.list-header),
:deep(.list-item) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0rem;
}
:deep(.list-item:last-child) {
  border-bottom: none;
}
</style>
