<script setup lang="ts">
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app-body {
  height: calc(100vh - 64px);
}

.app-content {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
