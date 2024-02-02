<script setup lang="ts">
  defineOptions({
    name: 'KaLoginPanel',
  });
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>

    <template #footer>Footer content</template>
  </el-card>
</template>
