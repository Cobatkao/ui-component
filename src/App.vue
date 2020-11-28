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
    const isAsideVisible = ref(true);
    provide("asideStatus", isAsideVisible);
  },
};
</script>
