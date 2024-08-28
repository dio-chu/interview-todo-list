<template>
  <div class="component-test">
    <h1>組件測試頁面</h1>
    <div v-if="!currentComponent">
      <ul>
        <li v-for="component in components" :key="component">
          <router-link :to="`/test/${component}`">
            {{ component }} 測試
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>{{ currentComponent }} 測試</h2>
      <component :is="dynamicComponent" v-if="dynamicComponent" />
      <p v-else>找不到組件 {{ currentComponent }}</p>
      <router-link to="/test">返回測試列表</router-link>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
export default {
  name: "ComponentTest",
  data() {
    return {
      components: [],
      dynamicComponent: null,
    };
  },
  computed: {
    currentComponent() {
      return this.$route.params.componentName;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.loadComponent();
      },
    },
  },
  created() {
    this.loadComponents();
  },
  methods: {
    loadComponents() {
      const modules = import.meta.glob("./tests/*.vue");
      this.components = Object.keys(modules).map((key) => {
        return key.replace(/(.*\/)*([^.]+).*/gi, "$2");
      });
    },
    async loadComponent() {
      if (this.currentComponent) {
        try {
          const module = await import(`./tests/${this.currentComponent}.vue`);
          this.dynamicComponent = markRaw(module.default);
        } catch (e) {
          console.error(`無法加載組件: ${this.currentComponent}`, e);
          this.dynamicComponent = null;
        }
      } else {
        this.dynamicComponent = null;
      }
    },
  },
};
</script>
