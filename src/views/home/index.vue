<script setup lang="ts">
  defineOptions({
    name: 'KaHome',
  });
  const name = ref('home');
</script>

<template>
  <div>
    {{ name }}
    <router-link :to="{ path: '/login' }">登录</router-link>
    <el-input v-model="name"></el-input>
  </div>
</template>
