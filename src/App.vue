<script setup lang="ts">
  import { type ConfigProviderContext } from 'element-plus';
  const size = ref<ConfigProviderContext['size']>('small');
  const zIndex = ref<ConfigProviderContext['zIndex']>(3000);
</script>

<template>
  <el-config-provider :z-index="zIndex" :size="size">
    <router-view />
  </el-config-provider>
</template>
