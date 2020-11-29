<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref, provide } from "vue";

export default {
  name: "App",
  setup() {
    const pageWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    const isAsideVisible = ref(pageWidth > 500 ? true : false);
    provide("asideStatus", isAsideVisible);
  },
};
</script>
