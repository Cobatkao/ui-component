<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import router from "./router";

export default {
  name: "App",
  setup() {
    const pageWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    const isAsideVisible = ref(pageWidth > 500 ? true : false);
    provide("asideStatus", isAsideVisible);
    router.afterEach(() => {
      if (pageWidth <= 500) {
        isAsideVisible.value = false;
      }
    });
  },
};
</script>
